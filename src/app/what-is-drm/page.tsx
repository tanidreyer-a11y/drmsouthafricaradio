import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import FrequencyDiagram from "@/components/FrequencyDiagram";
import { whatIsDrm } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "What is DRM — DRM SA Group",
  description:
    "Digital Radio Mondiale (DRM) is the open, ITU-recommended, ETSI-published digital radio standard covering AM, FM, SW and VHF.",
};

export default function WhatIsDrmPage() {
  return (
    <main>
      <PageHero
        title="An open standard, built by broadcasters."
        sub="DRM is the only global digital radio standard covering every currently used frequency band — designed with transmitter and receiver manufacturers and regulators from day one."
        image="/images/control-room.jpeg"
      />

      <section className={`${styles.section} wrap`}>
        <div className={styles.grid}>
          <Reveal as="h2" className={styles.heading} variant="blur">
            What Digital Radio Mondiale actually is
          </Reveal>
          <div className={styles.body}>
            <Reveal as="p">{whatIsDrm.intro}</Reveal>
            <Reveal as="p" delay={60}>
              {whatIsDrm.openStandard}
            </Reveal>
            <Reveal as="p" delay={100}>
              {whatIsDrm.noFees} Further information:{" "}
              <a href="https://ipr.drm.org" target="_blank" rel="noreferrer">
                ipr.drm.org
              </a>
              .
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionAlt} wrap`}>
        <div className={styles.grid}>
          <Reveal as="h2" className={styles.heading} variant="blur">
            Every band, one standard
          </Reveal>
          <div className={styles.body}>
            <Reveal as="p">{whatIsDrm.bands}</Reveal>
            <Reveal delay={80} variant="scale">
              <FrequencyDiagram />
            </Reveal>
            <div className={styles.modeGrid}>
              {whatIsDrm.modes.map((mode, i) => (
                <Reveal key={mode.name} delay={100 + i * 60} variant="scale">
                  <TiltCard max={6}>
                    <div className={styles.modeCard}>
                      <span className={styles.modeName}>{mode.name}</span>
                      <p className={styles.modeDetail}>{mode.detail}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} wrap`}>
        <div className={styles.grid}>
          <Reveal as="h2" className={styles.heading} variant="blur">
            Regulatory backing, real benefits
          </Reveal>
          <div className={styles.body}>
            <Reveal as="p">{whatIsDrm.regulatory}</Reveal>
            <Reveal as="p" delay={60}>
              {whatIsDrm.benefits}
            </Reveal>
            <div className={styles.benefitsRow}>
              {[
                { title: "Service reliability", body: "Consistent, robust reception across diverse propagation conditions." },
                { title: "Audio quality", body: "A clean digital signal replacing analogue hiss, fade and interference." },
                { title: "Usability & features", body: "Multi-channel, EWF and Journaline — impossible to replicate in analogue." },
              ].map((b, i) => (
                <Reveal key={b.title} delay={i * 60} variant="scale">
                  <TiltCard max={6}>
                    <div className={styles.benefitCard}>
                      <div className={styles.benefitTitle}>{b.title}</div>
                      <p className={styles.benefitBody}>{b.body}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
