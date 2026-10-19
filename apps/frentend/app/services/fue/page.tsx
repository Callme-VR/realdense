import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FueHero from "@/components/Fue_pages/homepage";
import FueOverview from "@/components/Fue_pages/Overview";
import IdealCandidate from "@/components/Fue_pages/IdealCandidate";
import FuePatientResults from "@/components/Fue_pages/PatientResults";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FUT Hair Transplant - Maximum Graft Yield | Realdense Clinic",
  description:
    "A proven strip technique that delivers high graft density and natural, long-lasting hair restoration results with expert surgeons at Realdense Clinic.",
};

export default function FuePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <FueHero />
        <FueOverview />
        <IdealCandidate />
        <FuePatientResults />
      </main>
      <Footer />
    </div>
  );
}
