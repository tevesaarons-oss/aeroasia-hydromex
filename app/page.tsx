import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { PositioningSection } from "@/components/PositioningSection";
import { TechnologySection } from "@/components/TechnologySection";
import { RecentSetupsSection } from "@/components/RecentSetupsSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { FieldOpsSection } from "@/components/FieldOpsSection";
import { ProjectsTimeline } from "@/components/ProjectsTimeline";
import { AboutSection } from "@/components/AboutSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { FacebookMarketingSection } from "@/components/FacebookMarketingSection";
import { SectionDivider } from "@/components/SectionDivider";
import { Footer } from "@/components/Footer";
import {
  hasBeforeAfterMedia,
  hasFieldOpsMedia,
  hasRecentSetupVideos,
} from "@/lib/media";

export default function Home() {
  // Optional media-dependent sections appear only when at least one real
  // asset is enabled. With zero assets the homepage still flows cleanly.
  const showRecentSetups = hasRecentSetupVideos();
  const showBeforeAfter = hasBeforeAfterMedia();
  const showFieldOps = hasFieldOpsMedia();

  return (
    <>
      <Navbar />
      <main className="max-w-full overflow-x-clip">
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <PositioningSection />
        <TechnologySection />

        {showRecentSetups && (
          <>
            <SectionDivider
              stage="02"
              label="Recent Set-ups"
              annotation="From AOP schematic to field deployment"
            />
            <RecentSetupsSection />
          </>
        )}

        {showBeforeAfter && <BeforeAfterSection />}

        <SectionDivider
          stage="03"
          label="Service Stack"
          annotation={
            showRecentSetups
              ? "From field deployment to the engineering services that get you there"
              : "From AOP schematic to the engineering services that get you there"
          }
        />
        <ServicesSection />

        <SectionDivider
          stage="04"
          label="Compliance Environment Matrix"
          annotation="From the service stack to the sectors Aeroasia is built for"
        />
        <SectorsSection />

        {showFieldOps && <FieldOpsSection />}

        <SectionDivider
          stage="05"
          label="Project Portfolio"
          annotation="From sector coverage to 200+ completed projects across the Philippines"
        />
        <ProjectsTimeline />

        <SectionDivider
          stage="06"
          label="Active Marketing Channel"
          annotation="From past projects to live updates on the A. Hydromex Facebook page"
        />
        <FacebookMarketingSection />

        <AboutSection />
        <ComplianceSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
