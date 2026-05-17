import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Named entries from Aeroasia-Hydromex's company profile and completed/ongoing project portfolio materials — Healthcare, Commercial, Tourism & Residential, Food, and Light Industry across the Philippines.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-full overflow-x-clip pt-20 sm:pt-28">
        <ProjectsPortfolio />
      </main>
      <Footer />
    </>
  );
}
