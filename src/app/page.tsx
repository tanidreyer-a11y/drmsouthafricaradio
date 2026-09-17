import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Problem from "@/components/home/Problem";
import CaseStudies from "@/components/home/CaseStudies";
import MemberWall from "@/components/home/MemberWall";
import MembershipPreview from "@/components/home/MembershipPreview";
import NewsPreview from "@/components/home/NewsPreview";
import GlobalCta from "@/components/home/GlobalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustMarquee />
      <Problem />
      <CaseStudies />
      <MemberWall />
      <MembershipPreview />
      <NewsPreview />
      <GlobalCta />
    </main>
  );
}
