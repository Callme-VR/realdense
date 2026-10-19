import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FueHero from "@/components/Fue_pages/homepage";
import FueOverview from "@/components/Fue_pages/Overview";
import TypesOfFut from "@/components/Fue_pages/TypesOfFut";
import Benefits from "@/components/Fue_pages/Benefits";
import OurProcess from "@/components/Fue_pages/OurProcess";
import StepByStepProcedure from "@/components/Fue_pages/StepByStepProcedure";
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
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <FueHero />
        <FueOverview />
        <TypesOfFut />
        <Benefits />
        <IdealCandidate />
        <FuePatientResults />
        <OurProcess />
        <StepByStepProcedure />
      </main>
      <Footer hideCta />
    </div>
  );
}
