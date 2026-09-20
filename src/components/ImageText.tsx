import Image from "next/image";
import styles from "./ImageText.module.css";
import Reveal from "@/components/Reveal";

type ImageTextProps = {
  title: string;
  body: string;
  image: string;
  caption?: string;
  reverse?: boolean;
  alt?: string;
};

export default function ImageText({ title, body, image, caption, reverse, alt = "" }: ImageTextProps) {
  return (
    <section className={`${styles.section} wrap ${reverse ? styles.reverse : ""}`}>
      <div className={styles.grid}>
        <Reveal variant="scale">
          <div className={styles.imgWrap}>
            <Image src={image} alt={alt} fill sizes="(max-width: 860px) 100vw, 50vw" className={styles.img} />
          </div>
        </Reveal>
        <Reveal variant="blur" delay={100}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            {caption && <p className={styles.caption}>{caption}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
