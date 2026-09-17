import styles from "./Problem.module.css";
import Reveal from "@/components/Reveal";

const analog = [
  "Patchy reception across large, diverse geographies",
  "Limited reach for community and commercial stations alike",
  "One signal, one channel, per frequency",
  "No built-in emergency alerting",
  "Higher energy cost per coverage area",
];

const drm = [
  "Crystal-clear digital sound on existing AM, FM, SW and VHF spectrum",
  "Multiple channels broadcast on a single frequency",
  "Emergency Warning Functionality (EWF) for public safety",
  "Journaline data services — text, images and distance learning alongside audio",
  "Lower energy consumption than analogue FM",
];

export default function Problem() {
  return (
    <section className={`${styles.section} wrap`}>
      <Reveal as="div" className={styles.head}>
        <h2 className={styles.title}>
          Still stuck in analog? <span>You&apos;re not alone.</span>
        </h2>
        <p className={styles.lead}>
          Outdated infrastructure is holding back community and commercial radio stations across
          South Africa. DRM changes the economics of broadcasting entirely.
        </p>
      </Reveal>

      <Reveal as="div" delay={80}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colHead}>
              <span className={styles.badgeAnalog} />
              Analog today
            </div>
            <ul className={styles.list}>
              {analog.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.col} ${styles.colDrm}`}>
            <div className={styles.colHead}>
              <span className={styles.badgeDrm} />
              With DRM
            </div>
            <ul className={styles.list}>
              {drm.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="p" className={styles.proof} delay={120}>
        When the big players were hesitant, community stations stepped up.{" "}
        <strong>Radio Pulpit&apos;s DRM AM trial</strong> and{" "}
        <strong>Kofifi FM&apos;s DRM FM success</strong> proved this tech works, right here in
        South Africa &mdash; and their results are becoming part of an official ITU document.
      </Reveal>
    </section>
  );
}
