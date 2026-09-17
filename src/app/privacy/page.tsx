import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DRM SA Group",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "160px var(--gutter) 120px" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: 20 }}>Privacy Policy</h1>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
        This page is a placeholder. DRM SA Group has not yet supplied a final privacy policy —
        replace this text with the organisation&apos;s real policy (what contact-form and
        cookie data is collected, how it is stored, and who it is shared with) before this site
        goes live.
      </p>
    </main>
  );
}
