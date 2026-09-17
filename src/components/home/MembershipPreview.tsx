import Link from "next/link";
import styles from "./MembershipPreview.module.css";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { membershipTiers } from "@/lib/content";

export default function MembershipPreview() {
  return (
    <section className={`${styles.section} wrap`}>
      <Reveal as="div" className={styles.head}>
        <h2 className={styles.title}>Three ways to join the movement</h2>
        <Link href="/membership" className={styles.link}>
          Full membership details →
        </Link>
      </Reveal>

      <div className={styles.grid}>
        {membershipTiers.map((t, i) => (
          <Reveal as="div" key={t.tier} delay={i * 90} variant="scale">
            <TiltCard>
              <div className={styles.card}>
                <span className={styles.tier}>{t.tier}</span>
                <p className={styles.benefit}>{t.benefit}</p>
                <Link href="/membership" className={styles.link}>
                  Learn more →
                </Link>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
