"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import { newsArticles } from "@/lib/content";

const categories = ["All", "Local News", "Global", "Partnerships"];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
}

export default function NewsList() {
  const [filter, setFilter] = useState("All");
  const items = newsArticles.filter((a) => filter === "All" || a.category === filter);

  return (
    <>
      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.filterBtn} ${filter === c ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {items.map((a, i) => (
          <Reveal as="article" key={a.slug} id={a.slug} className={styles.article} delay={Math.min(i, 4) * 50}>
            <div className={styles.imgWrap}>
              {a.image && (
                <Image src={a.image} alt="" fill sizes="260px" className={styles.img} />
              )}
            </div>
            <div>
              <div className={styles.meta}>
                <span className={styles.category}>{a.category}</span>
                <span>{formatDate(a.date)}</span>
              </div>
              <h2 className={styles.articleTitle}>{a.title}</h2>
              <div className={styles.body}>
                {a.body.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
              {a.video && (
                <a href={a.video} target="_blank" rel="noreferrer" className={styles.video}>
                  Watch the demonstration →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
