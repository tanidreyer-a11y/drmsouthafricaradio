import Image from "next/image";
import styles from "./PageHero.module.css";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  title: string;
  sub?: string;
  image?: string;
};

export default function PageHero({ title, sub, image }: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${image ? styles.scrimmed : styles.plain}`}>
      {image && (
        <>
          <div className={styles.bg}>
            <Image src={image} alt="" fill priority sizes="100vw" className={styles.bgImg} />
          </div>
          <div className={styles.scrim} />
        </>
      )}
      <div className={styles.content}>
        <Reveal as="h1" className={styles.title} variant="blur">
          {title}
        </Reveal>
        {sub && (
          <Reveal as="p" className={styles.sub} delay={80}>
            {sub}
          </Reveal>
        )}
      </div>
    </section>
  );
}
