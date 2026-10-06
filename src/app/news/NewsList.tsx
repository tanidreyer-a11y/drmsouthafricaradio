import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import { plainText } from "@/components/RichText";
import { localNews } from "@/lib/content";

export default function NewsList() {
  return (
    <div className={styles.list}>
      {localNews.map((post, i) => {
        const intro = post.body.find((b) => typeof b === "string") as string | undefined;
        return (
          <Reveal key={post.slug} delay={(i % 3) * 70} variant="scale">
            <Link href={`/news/${post.slug}`} className={styles.card}>
              <div className={`${styles.imgWrap} ${post.imageFit === "contain" ? styles.contain : ""}`}>
                {post.image && (
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px"
                    className={styles.img}
                  />
                )}
              </div>
              <span className={styles.category}>Local News</span>
              <h2 className={styles.articleTitle}>{post.title}</h2>
              {intro && <p className={styles.excerpt}>{plainText(intro)}</p>}
              <span className={styles.readMore}>Read more →</span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
