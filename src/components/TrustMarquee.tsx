import styles from "./TrustMarquee.module.css";
import { trustMarks } from "@/lib/content";

export default function TrustMarquee() {
  const items = [...trustMarks, ...trustMarks];

  return (
    <div className={styles.band}>
      <p className={styles.caption}>
        Operating under international standards and local regulatory approval
      </p>
      <div className={styles.track} aria-hidden="true">
        {items.map((mark, i) => (
          <span key={`${mark}-${i}`} className={styles.item}>
            <span className={styles.dot} />
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}
