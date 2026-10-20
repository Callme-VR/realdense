import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FueHero from "@/components/Fue_pages/homepage";
import FueOverview from "@/components/Fue_pages/Overview";
import TypesOfFut from "@/components/Fue_pages/TypesOfFut";
import Benefits from "@/components/Fue_pages/Benefits";
import OurProcess from "@/components/Fue_pages/OurProcess";
import OurProcess2 from "@/components/Fue_pages/OurProcess2";
import StepByStepProcedure from "@/components/Fue_pages/StepByStepProcedure";
import IdealCandidate from "@/components/Fue_pages/IdealCandidate";
import CostOverview from "@/components/Fue_pages/CostOverview";
import CausesOfHairLoss from "@/components/Fue_pages/CausesOfHairLoss";
import PostSurgerySupport from "@/components/Fue_pages/PostSurgerySupport";
import DosAndDonts from "@/components/Fue_pages/DosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import RecoveryTimeline from "@/components/Fue_pages/RecoveryTimeline";
import FueFaq from "@/components/Fue_pages/FueFaq";
import TechniqueComparison from "@/components/Fue_pages/TechniqueComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";
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
        <OurProcess2 />
        <StepByStepProcedure />
        <CostOverview />
        <CausesOfHairLoss />
        <PostSurgerySupport />
        <DosAndDonts />
        <PatientReviews />
        <RecoveryTimeline />
        <FueFaq />
        <TechniqueComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
