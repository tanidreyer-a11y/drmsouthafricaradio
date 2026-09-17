"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

type Status = { type: "ok" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) {
      setStatus({ type: "error", message: "Please confirm you've read the privacy policy." });
      return;
    }
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.ok) {
        setStatus({ type: "ok", message: "Thanks — your message is on its way. We'll be in touch soon." });
        form.reset();
        setAgreed(false);
      } else {
        setStatus({ type: "error", message: result.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again, or email info@drmsa.org directly." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full name</label>
          <input className={styles.input} id="name" name="name" type="text" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} id="email" name="email" type="email" required />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">Phone number</label>
        <input className={styles.input} id="phone" name="phone" type="text" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Your message</label>
        <textarea className={styles.textarea} id="message" name="message" required />
      </div>

      {/* Honeypot field — hidden from real visitors, bots fill it in */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className={styles.privacyRow}>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>
          I have read and understand the <a href="/privacy">privacy policy</a>.
        </span>
      </label>

      {status && (
        <div className={status.type === "ok" ? `${styles.status} ${styles.statusOk}` : `${styles.status} ${styles.statusError}`}>
          {status.message}
        </div>
      )}

      <button className={styles.submit} type="submit" disabled={loading}>
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
