import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ImageText from "@/components/ImageText";
import { membershipTiers, siteMeta } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Membership — DRM SA Group",
  description:
    "Three membership tiers for broadcasters, institutions and independent creators driving DRM adoption across Southern Africa.",
};

const steps = [
  { title: "Download the form", body: "Get the DRM SA Group membership application form below." },
  { title: "Attach your documents", body: "Broadcast licence for licensed broadcasters, or business registration / letterhead for non-broadcasters." },
  { title: "Email it in", body: `Send the completed form with billing information to ${siteMeta.email}.` },
  { title: "Activate", body: "DRM SA reviews your application and emails an invoice. Membership is active once payment is received." },
];

export default function MembershipPage() {
  return (
    <main>
      <PageHero
        title="Join the movement shaping the future of African radio"
        sub="DRM SA is calling on forward-thinking broadcasters, media innovators and industry stakeholders to become part of South Africa's digital radio revolution."
        image="/images/sound-waves.jpeg"
      />

      <section className={`${styles.section} wrap`}>
        <div className={styles.grid}>
          {membershipTiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 80} variant="scale">
              <TiltCard>
                <div className={styles.card}>
                  <h2 className={styles.tier}>{t.tier}</h2>
                  <div>
                    <span className={styles.eligHeading}>Ideal for</span>
                    <ul className={styles.eligList} style={{ marginTop: 10 }}>
                      {t.eligibility.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>
                  <p className={styles.benefit}>{t.benefit}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <ImageText
        image="/images/radios-warm.jpg"
        alt="A shelf of vintage analogue radios"
        title="From community stations to national platforms"
        body="When larger broadcasters were still weighing their options, community stations were the ones who stepped up first. Radio Pulpit's DRM AM trial and Kofifi FM 97.2's DRM FM success proved the standard works in South Africa — membership is how the next station gets there faster."
      />

      <section className={`${styles.sectionAlt} wrap`}>
        <Reveal as="div" className={styles.stepsHead}>
          <h2 className={styles.title}>How to apply</h2>
          <p className={styles.sub}>
            Once your application is reviewed and approved, you&apos;ll receive your membership
            invoice by email. Membership becomes active once payment is received.
          </p>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="div" key={s.title} className={styles.step} delay={i * 70} variant="line">
              <span className={styles.stepNum}>0{i + 1}</span>
              <p className={styles.stepBody}>{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className={styles.downloadRow} delay={280}>
          <a
            href="/documents/DRM-SA-Group-Membership-Application.pdf"
            className={styles.downloadBtn}
            download
          >
            Download application form
          </a>
          <span className={styles.downloadNote}>PDF · DRM SA Group Membership Application</span>
        </Reveal>
      </section>
    </main>
  );
}
