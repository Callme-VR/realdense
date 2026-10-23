import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FueOverview from "@/components/Fue_pages/Overview";
import FueHero from "@/components/Fue_pages/homepage";
import IdealCandidate from "@/components/Fue_pages/IdealCandidate";
import FuePatientResults from "@/components/Fue_pages/PatientResults";


export const metadata: Metadata = {
  title: "FUE Hair Transplant - Maximum Graft Yield | Realdense Clinic",
  description:
    "A proven strip technique that delivers high graft density and natural, long-lasting hair restoration results with expert surgeons at Realdense Clinic.",
};

export default function FuePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <FueHero />
        <FueOverview />
        <IdealCandidate />
        <FuePatientResults />
      </main>
      <Footer hideCta />
    </div>
  );
}
