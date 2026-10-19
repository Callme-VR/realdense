import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/Services_pages/HomePage";
import ExploreServices from "@/components/Services_pages/Explore_type";
import GetInTouch from "@/components/Services_pages/GetinTouch";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advanced Hair Restoration Solutions & Services | Realdense Clinic",
  description:
    "Explore our complete hair restoration solutions including FUE, DHI, Sapphire FUE, hairline design, and beard transplants using advanced techniques and expert care.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ServicesHero />
        <ExploreServices />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
