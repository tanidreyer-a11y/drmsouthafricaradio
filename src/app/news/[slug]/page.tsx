import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import RichText, { plainText } from "@/components/RichText";
import { localNews } from "@/lib/content";
import styles from "./post.module.css";

export function generateStaticParams() {
  return localNews.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = localNews.find((p) => p.slug === slug);
  if (!post) return {};
  const intro = post.body.find((b) => typeof b === "string") as string | undefined;
  return {
    title: `${post.title} — DRM SA Group`,
    description: intro ? plainText(intro).slice(0, 160) : undefined,
  };
}

export default async function NewsPostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = localNews.find((p) => p.slug === slug);
  if (!post) notFound();

  const cover = post.image && (
    <div className={`${styles.cover} ${post.imageFit === "contain" ? styles.contain : ""}`}>
      <Image src={post.image} alt="" fill priority sizes="(max-width: 860px) 100vw, 800px" className={styles.img} />
    </div>
  );

  return (
    <main>
      <article className={styles.post}>
        <Link href="/news" className={styles.back}>
          ← All news
        </Link>
        <span className={styles.category}>Local News</span>
        <h1 className={styles.title}>{post.title}</h1>

        {post.video ? (
          <a href={post.video} target="_blank" rel="noreferrer" className={styles.videoLink}>
            {cover}
            <span className={styles.play}>▶ Watch the video</span>
          </a>
        ) : (
          cover
        )}

        <div className={styles.body}>
          {post.body.map((block, i) => {
            if (typeof block === "string") {
              return (
                <p key={i}>
                  <RichText text={block} />
                </p>
              );
            }
            if ("heading" in block) return <h2 key={i}>{block.heading}</h2>;
            return (
              <ul key={i}>
                {block.list.map((item, j) =>
                  typeof item === "string" ? (
                    <li key={j}>
                      <RichText text={item} />
                    </li>
                  ) : (
                    <li key={j}>
                      <RichText text={item.text} />
                      <ul>
                        {item.items.map((sub, k) => (
                          <li key={k}>
                            <RichText text={sub} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            );
          })}
        </div>

        {post.gallery && (
          <section className={styles.gallerySection}>
            {post.galleryTitle && <h2 className={styles.galleryTitle}>{post.galleryTitle}</h2>}
            <div className={styles.gallery}>
              {post.gallery.map((src) => (
                <a key={src} href={src} target="_blank" rel="noreferrer" className={styles.galleryItem}>
                  <Image src={src} alt="" fill sizes="(max-width: 640px) 50vw, 260px" className={styles.img} />
                </a>
              ))}
            </div>
          </section>
        )}

        <Link href="/news" className={styles.backBottom}>
          ← Back to all news
        </Link>
      </article>
    </main>
  );
}
