import styles from "./CaseStudies.module.css";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { caseStudies } from "@/lib/content";

export default function CaseStudies() {
  return (
    <section className={`${styles.section}`}>
      <div className="wrap">
        <Reveal as="div" className={styles.head}>
          <h2 className={styles.title}>Proof, not promises</h2>
          <p className={styles.subtitle}>
            Every claim on this page has a name, a date and a frequency attached to it.
          </p>
        </Reveal>
      </div>

      <div className={styles.row}>
        {caseStudies.map((item, i) => (
          <Reveal as="div" key={item.title} delay={i * 70} variant="scale" className={styles.cardSlot}>
            <TiltCard max={5}>
              <article className={styles.card}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
                {item.video && (
                  <a href={item.video} target="_blank" rel="noreferrer" className={styles.link}>
                    Watch the demonstration →
                  </a>
                )}
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
