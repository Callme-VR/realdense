import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TypesOfFut from "@/components/Fut_pages/TypesOfFut";
import Benefits from "@/components/Fut_pages/Benefits";
import OurProcess from "@/components/Fut_pages/OurProcess";
import OurProcess2 from "@/components/Fut_pages/OurProcess2";
import StepByStepProcedure from "@/components/Fut_pages/StepByStepProcedure";
import IdealCandidate from "@/components/Fut_pages/IdealCandidate";
import CostOverview from "@/components/Fut_pages/CostOverview";
import CausesOfHairLoss from "@/components/Fut_pages/CausesOfHairLoss";
import PostSurgerySupport from "@/components/Fut_pages/PostSurgerySupport";
import DosAndDonts from "@/components/Fut_pages/DosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import RecoveryTimeline from "@/components/Fut_pages/RecoveryTimeline";
import FutFaq from "@/components/Fut_pages/FutFaq";
import FutPatientResults from "@/components/Fut_pages/PatientResults";
import Footer from "@/components/Footer";
import FutOverview from "@/components/Fut_pages/Overview";
import FutHero from "@/components/Fut_pages/homepage";
import TechniqueComparison from "@/components/Fut_pages/TechniqueComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title: "FUT Hair Transplant - Maximum Graft Yield | Realdense Clinic",
  description:
    "A proven strip technique that delivers high graft density and natural, long-lasting hair restoration results with expert surgeons at Realdense Clinic.",
};

export default function FutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <FutHero />
        <FutOverview />
        <TypesOfFut />
        <Benefits />
        <IdealCandidate />
        <FutPatientResults />
        <OurProcess />
        <OurProcess2 />
        <StepByStepProcedure />
        <CostOverview />
        <CausesOfHairLoss />
        <PostSurgerySupport />
        <DosAndDonts />
        <PatientReviews />
        <RecoveryTimeline />
        <FutFaq />
        <TechniqueComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
