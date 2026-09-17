"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi, I'm the DRM SA assistant. Ask me about the DRM standard, membership tiers, or our recent demonstrations.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't reach the assistant just now. Try again shortly, or email info@drmsa.org.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry, I couldn't reach the assistant just now. Try again shortly, or email info@drmsa.org.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className={styles.launcher}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close DRM assistant" : "Ask about DRM"}
        aria-expanded={open}
      >
        {open ? "✕" : "💬"}
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`} role="dialog" aria-label="DRM SA assistant">
        <div className={styles.header}>
          <span className={styles.headerTitle}>
            <span className={styles.dot} />
            Ask about DRM
          </span>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
            ✕
          </button>
        </div>

        <div className={styles.messages} ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.bubble} ${m.role === "user" ? styles.bubbleUser : styles.bubbleBot}`}>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className={`${styles.bubble} ${styles.bubbleBot}`}>
              <span className={styles.typing}>
                <span />
                <span />
                <span />
              </span>
            </div>
          )}
        </div>

        <p className={styles.disclosure}>
          AI assistant — for anything urgent, call +27 76 504 7794 or email info@drmsa.org.
        </p>

        <div className={styles.inputRow}>
          <textarea
            className={styles.input}
            rows={1}
            placeholder="Ask about DRM standards, membership, or our projects"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
          />
          <button className={styles.sendBtn} onClick={send} disabled={loading || !input.trim()} aria-label="Send">
            →
          </button>
        </div>
      </div>
    </>
  );
}
