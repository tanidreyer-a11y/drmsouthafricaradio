import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageText from "@/components/ImageText";
import { about } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us — DRM SA Group",
  description:
    "DRM SA Group is the revitalised voice of digital radio in South Africa, preparing the region's radio landscape for its digital evolution.",
};

const timeline = [
  {
    year: "20+ years ago",
    body: "The journey toward digital radio begins in South Africa.",
  },
  {
    year: "2014",
    body: "The DRM Consortium launches the Southern Africa Platform, spearheaded by Radio Pulpit's Managing Director — leading to South Africa's first successful DRM AM (mediumwave) trial.",
  },
  {
    year: "Soon after",
    body: "Kofifi FM 97.2, a Johannesburg community station, achieves a successful DRM FM trial with Wecodec and local partners. The findings are recognised as an official ITU document, ready for global publication.",
  },
  {
    year: "July 2020",
    body: "The South African government issues a policy directive on introducing Digital Sound Broadcasting — the trigger to re-ignite the platform.",
  },
  {
    year: "Today",
    body: "The former DRM SA PLATFORM relaunches as DRM SA GROUP under the DRM Consortium banner, preparing Southern Africa's radio landscape for its digital evolution.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Powering the future of radio in Southern Africa"
        sub="Introducing DRM SA GROUP — the revitalised voice of digital radio in South Africa."
        image="/images/tower-dusk.jpeg"
      />

      <section className={`${styles.section} wrap`}>
        <Reveal as="p" className={styles.lead}>
          {about.lead}
        </Reveal>
        <Reveal as="p" className={styles.mission} delay={80}>
          {about.mission}
        </Reveal>
      </section>

      <section className={`${styles.sectionAlt} wrap`}>
        <Reveal as="h2" className={styles.timelineTitle}>
          A legacy of innovation
        </Reveal>
        <div className={styles.timeline}>
          {timeline.map((t, i) => (
            <Reveal as="div" key={t.year} className={styles.point} delay={i * 70}>
              <span className={styles.pointYear}>{t.year}</span>
              <p className={styles.pointBody}>{t.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ImageText
        image="/images/aldred-russel.png"
        alt="DRM SA engineers with a Starwaves DRM receiver overlooking Johannesburg"
        title="Built by the people testing it in the field"
        body="Behind every trial is a small team of broadcast engineers physically installing receivers, tuning transmitters and proving the standard works on South African terrain, before it ever reaches a listener's home."
        caption="DRM SA engineers with a Starwaves DRM receiver, Johannesburg."
      />

      <section className={`${styles.section} wrap`}>
        <Reveal as="h2" className={styles.timelineTitle}>
          What we stand for
        </Reveal>
        <div className={styles.objectivesGrid}>
          {about.objectives.map((o, i) => (
            <Reveal as="div" key={o} className={styles.objective} delay={i * 70}>
              <span className={styles.objNum}>0{i + 1}</span>
              <p className={styles.objBody}>{o}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${styles.sectionAlt} wrap`}>
        <Reveal as="p" className={styles.lead}>
          {about.whyNow}
        </Reveal>
        <Reveal as="p" className={styles.mission} delay={80}>
          {about.global}
        </Reveal>
      </section>

      <Reveal as="p" className={`${styles.closing} wrap`}>
        Let&apos;s broadcast the <span>future</span>, together.
      </Reveal>
    </main>
  );
}
