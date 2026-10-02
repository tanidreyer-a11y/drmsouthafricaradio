import type { Metadata } from "next";
import Image from "next/image";
import NewsList from "./NewsList";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "News — DRM SA Group",
  description:
    "Announcements, demonstrations, partnerships and updates from the DRM SA Group as digital radio rolls out across Southern Africa.",
};

const ibc = ["ibc-booth", "ibc-2", "ibc-3", "ibc-6", "ibc-4", "ibc-8"];

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

      <section className={styles.ibc}>
        <Reveal as="h2" className={styles.ibcTitle} variant="blur">
          On the exhibition floor
        </Reveal>
        <Reveal as="p" className={styles.ibcSub} delay={80}>
          The DRM stand at IBC, the international broadcast exhibition: live demonstrations, receiver
          launches and the people building digital radio.
        </Reveal>
        <div className={styles.ibcGrid}>
          {ibc.map((name, i) => (
            <Reveal key={name} delay={i * 60} variant="scale" className={styles.ibcItem}>
              <Image src={`/images/${name}.jpg`} alt="DRM stand at IBC" fill sizes="(max-width: 760px) 50vw, 33vw" className={styles.img} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
