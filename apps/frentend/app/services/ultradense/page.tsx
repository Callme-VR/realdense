import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UltraHero from "@/components/Ultra_pages/Ultrahero";
import UltraOverview from "@/components/Ultra_pages/UltraOverview";
import UltraIdealCandidate from "@/components/Ultra_pages/UltraIdealCandidate";
import UltraPatientResults from "@/components/Ultra_pages/UltraPatientResults";
import UltraTypes from "@/components/Ultra_pages/UltraTypes";
import UltraProcess from "@/components/Ultra_pages/UltraProcess";
import UltraStepProcedure from "@/components/Ultra_pages/UltraStepProcedure";
import UltraBenefits from "@/components/Ultra_pages/UltraBenefits";
import UltraCostOverview from "@/components/Ultra_pages/UltraCostOverview";
import UltraCausesOfHairLoss from "@/components/Ultra_pages/UltraCausesOfHairLoss";
import UltraWhyChoose from "@/components/Ultra_pages/UltraWhyChoose";
import UltraPostSurgerySupport from "@/components/Ultra_pages/UltraPostSurgerySupport";
import UltraDosAndDonts from "@/components/Ultra_pages/UltraDosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import UltraRecovery from "@/components/Ultra_pages/UltraRecovery";
import UltraFaq from "@/components/Ultra_pages/UltraFaq";
import UltraComparison from "@/components/Ultra_pages/UltraComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title: "Ultra Dense Hair Transplant - Enhanced Density, Natural-Looking Results | Realdense Clinic",
  description:
    "An advanced hair restoration approach designed to achieve fuller-looking hair through precise graft placement and customised treatment planning at Realdense Clinic.",
};

export default function UltraDensePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <UltraHero />
        <UltraOverview />
        <UltraIdealCandidate />
        <UltraPatientResults />
        <UltraTypes />
        <UltraProcess />
        <UltraStepProcedure />
        <UltraBenefits />
        <UltraCostOverview />
        <UltraCausesOfHairLoss />
        <UltraWhyChoose />
        <UltraPostSurgerySupport />
        <UltraDosAndDonts />
        <PatientReviews />
        <UltraRecovery />
        <UltraFaq />
        <UltraComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
