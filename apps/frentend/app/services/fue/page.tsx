import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FueOverview from "@/components/Fue_pages/Overview";
import FueHero from "@/components/Fue_pages/homepage";
import IdealCandidate from "@/components/Fue_pages/IdealCandidate";
import FuePatientResults from "@/components/Fue_pages/PatientResults";
import TypesOfFue from "@/components/Fue_pages/TypesOfFue";
import OurProcessFue from "@/components/Fue_pages/OurProcess";
import StepByStepProcedureFue from "@/components/Fue_pages/StepByStepProcedureFue";
import BenefitsFue from "@/components/Fue_pages/Benefits";
import CostOverviewFue from "@/components/Fue_pages/CostOverview";
import CausesOfHairLossFue from "@/components/Fue_pages/CausesOfHairLoss";
import OurProcess2Fue from "@/components/Fue_pages/Ourprocess2fue";



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
        <TypesOfFue />
        <OurProcessFue />
        <StepByStepProcedureFue />
        <BenefitsFue />
        <CostOverviewFue />
        <CausesOfHairLossFue />
        <OurProcess2Fue />
      </main>
      <Footer hideCta />
    </div>
  );
}
