import Link from "next/link";
import styles from "./GlobalCta.module.css";
import Reveal from "@/components/Reveal";

const countries = ["South Africa", "India", "Germany", "Brazil", "Russia", "USA"];

export default function GlobalCta() {
  return (
    <section className={`${styles.section} wrap`}>
      <div className={styles.grid}>
        <Reveal as="div">
          <h2 className={styles.title}>Part of one global movement</h2>
          <p className={styles.body}>
            DRM SA stands alongside national DRM platforms working toward a shared vision: the
            digital transformation of radio. We are a non-profit group committed to supporting
            broadcasters, communities and governments in making this leap together.
          </p>
          <div className={styles.countries}>
            {countries.map((c) => (
              <span key={c} className={styles.country}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" delay={100}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Let&apos;s broadcast the future, together.</h3>
            <p className={styles.ctaBody}>
              Whether you&apos;re a national broadcaster or a grassroots community station,
              there&apos;s a membership tier built for you.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/membership" className={styles.primary}>
                Become a Member
              </Link>
              <Link href="/contact" className={styles.secondary}>
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
