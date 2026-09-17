import Link from "next/link";
import Image from "next/image";
import styles from "./NewsPreview.module.css";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { newsArticles } from "@/lib/content";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsPreview() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className={`${styles.section} wrap`}>
      <Reveal as="div" className={styles.head}>
        <h2 className={styles.title}>From the newsroom</h2>
        <Link href="/news" className={styles.link}>
          All updates →
        </Link>
      </Reveal>

      <div className={styles.grid}>
        {latest.map((article, i) => (
          <Reveal key={article.slug} delay={i * 80} variant="scale">
            <TiltCard max={5}>
              <Link href={`/news#${article.slug}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  {article.image && (
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 860px) 100vw, 33vw"
                      className={styles.img}
                    />
                  )}
                </div>
                <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                  <span>{formatDate(article.date)}</span>
                </div>
                <h3 className={styles.cardTitle}>{article.title}</h3>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
