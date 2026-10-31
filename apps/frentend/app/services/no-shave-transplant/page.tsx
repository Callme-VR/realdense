import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dedicated No-Shave components matching reference designs
import NoShaveHero from "@/components/No_shave_hair_transplant/NoShaveHero";
import NoShaveOverview from "@/components/No_shave_hair_transplant/NoShaveOverview";
import NoShaveIdealCandidate from "@/components/No_shave_hair_transplant/NoShaveIdealCandidate";
import NoShavePatientResults from "@/components/No_shave_hair_transplant/NoShavePatientResults";
import NoShaveTypes from "@/components/No_shave_hair_transplant/NoShaveTypes";
import NoShaveProcess from "@/components/No_shave_hair_transplant/NoShaveProcess";
import NoShaveStepProcedure from "@/components/No_shave_hair_transplant/NoShaveStepProcedure";
import NoShaveBenefits from "@/components/No_shave_hair_transplant/NoShaveBenefits";
import NoShaveCostOverview from "@/components/No_shave_hair_transplant/NoShaveCostOverview";
import NoShaveCausesOfHairLoss from "@/components/No_shave_hair_transplant/NoShaveCausesOfHairLoss";
import NoShaveWhyChoose from "@/components/No_shave_hair_transplant/NoShaveWhyChoose";
import NoShavePostSurgerySupport from "@/components/No_shave_hair_transplant/NoShavePostSurgerySupport";
import NoShaveDosAndDonts from "@/components/No_shave_hair_transplant/NoShaveDosAndDonts";
import NoShaveRecovery from "@/components/No_shave_hair_transplant/NoShaveRecovery";
import NoShaveFaq from "@/components/No_shave_hair_transplant/NoShaveFaq";
import NoShaveComparison from "@/components/No_shave_hair_transplant/NoShaveComparison";

// Shared common sections
import PatientReviews from "@/components/Home_pages/PatientReviews";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "No-Shave Hair Transplant - Discreet Restoration, Natural-Looking Results | Realdense Clinic",
  description:
    "Restore hair while keeping your existing hairstyle. This technique limits shaving to the donor area, helping maintain a discreet, natural appearance with zero downtime.",
};

export default function NoShavePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <NoShaveHero />
        <NoShaveOverview />
        <NoShaveIdealCandidate />
        <NoShavePatientResults />
        <NoShaveTypes />
        <NoShaveProcess />
        <NoShaveStepProcedure />
        <NoShaveBenefits />
        <NoShaveCostOverview />
        <NoShaveCausesOfHairLoss />
        <NoShaveWhyChoose />
        <NoShavePostSurgerySupport />
        <NoShaveDosAndDonts />
        <PatientReviews />
        <NoShaveRecovery />
        <NoShaveFaq />
        <NoShaveComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
