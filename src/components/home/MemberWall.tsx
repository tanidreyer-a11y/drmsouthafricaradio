import Image from "next/image";
import styles from "./MemberWall.module.css";
import Reveal from "@/components/Reveal";
import { members } from "@/lib/content";

export default function MemberWall() {
  return (
    <section className={`${styles.section} wrap`}>
      <Reveal as="div" className={styles.head}>
        <h2 className={styles.title}>A growing regional network</h2>
        <p className={styles.subtitle}>
          Broadcasters, engineers and signal distributors already building South Africa&apos;s
          digital radio future with us.
        </p>
      </Reveal>

      <Reveal as="div" delay={80}>
        <div className={styles.grid}>
          {members.map((m) => (
            <div key={m.name} className={styles.cell}>
              {m.logo ? (
                <Image src={m.logo} alt={m.name} width={140} height={40} className={styles.logoImg} />
              ) : (
                <span className={styles.nameOnly}>{m.name}</span>
              )}
              <span className={styles.note}>{m.note}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
