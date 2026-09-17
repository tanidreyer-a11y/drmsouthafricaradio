import type { Metadata } from "next";
import NewsList from "./NewsList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "News — DRM SA Group",
  description:
    "Announcements, demonstrations, partnerships and updates from the DRM SA Group as digital radio rolls out across Southern Africa.",
};

export default function NewsPage() {
  return (
    <main>
      <div className={styles.hero}>
        <h1 className={styles.title}>Stay informed: DRM news and announcements</h1>
        <p className={styles.sub}>
          Important announcements, project highlights, technical innovations and event coverage
          shaping the future of digital radio in Africa.
        </p>
      </div>
      <NewsList />
    </main>
  );
}
