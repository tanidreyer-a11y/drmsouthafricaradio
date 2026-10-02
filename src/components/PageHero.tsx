import Image from "next/image";
import styles from "./PageHero.module.css";
import BgVideo from "@/components/BgVideo";

type PageHeroProps = {
  title: string;
  sub?: string;
  image?: string;
  video?: string;
};

export default function PageHero({ title, sub, image, video }: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${image ? styles.scrimmed : styles.plain} ${video ? styles.tall : ""}`}>
      {image && (
        <>
          <div className={styles.bg}>
            <Image src={image} alt="" fill priority sizes="100vw" className={styles.bgImg} />
            {video && <BgVideo src={video} poster={image} className={styles.bgVideo} />}
          </div>
          <div className={styles.scrim} />
        </>
      )}
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.enter}`}>{title}</h1>
        {sub && <p className={`${styles.sub} ${styles.enter} ${styles.enterLate}`}>{sub}</p>}
      </div>
    </section>
  );
}
