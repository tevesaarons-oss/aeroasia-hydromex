import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsTimeline } from "@/components/ProjectsTimeline";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The projects below reflect the named entries currently listed in Aeroasia-Hydromex's existing project history. They sit within the company's broader stated 200+ project experience.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-full overflow-x-clip pt-24 sm:pt-28">
        <ProjectsTimeline />
      </main>
      <Footer />
    </>
  );
}
