import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { siteMeta } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — DRM SA Group",
  description: "Get in touch with the DRM SA Group.",
};

export default function ContactPage() {
  return (
    <main className={styles.section}>
      <div className={styles.grid}>
        <Reveal as="div">
          <h1 className={styles.title}>Feel free to reach out</h1>
          <p className={styles.sub}>
            Questions about DRM, membership, or a demonstration you&apos;d like to see? We&apos;d
            love to hear from you.
          </p>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <a className={styles.infoValue} href={siteMeta.phoneHref}>{siteMeta.phone}</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <a className={styles.infoValue} href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>LinkedIn</span>
              <a className={styles.infoValue} href={siteMeta.linkedin} target="_blank" rel="noreferrer">
                DRM SA Group
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
