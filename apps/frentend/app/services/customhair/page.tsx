import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomHairHero from "@/components/Custome_hair/CustomHairHero";
import CustomHairOverview from "@/components/Custome_hair/CustomHairOverview";
import CustomHairIdealCandidate from "@/components/Custome_hair/CustomHairIdealCandidate";
import CustomHairPatientResults from "@/components/Custome_hair/CustomHairPatientResults";
import CustomHairTypes from "@/components/Custome_hair/CustomHairTypes";
import CustomHairProcess from "@/components/Custome_hair/CustomHairProcess";
import CustomHairStepProcedure from "@/components/Custome_hair/CustomHairStepProcedure";
import CustomHairBenefits from "@/components/Custome_hair/CustomHairBenefits";
import CustomHairCostOverview from "@/components/Custome_hair/CustomHairCostOverview";
import CustomHairCausesOfHairLoss from "@/components/Custome_hair/CustomHairCausesOfHairLoss";
import CustomHairWhyChoose from "@/components/Custome_hair/CustomHairWhyChoose";
import CustomHairPostSurgerySupport from "@/components/Custome_hair/CustomHairPostSurgerySupport";
import CustomHairDosAndDonts from "@/components/Custome_hair/CustomHairDosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import CustomHairRecovery from "@/components/Custome_hair/CustomHairRecovery";
import CustomHairFaq from "@/components/Custome_hair/CustomHairFaq";
import CustomHairComparison from "@/components/Custome_hair/CustomHairComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "Custom Hairline Transplant - Designed Hairline, Natural–Looking Results | Realdense Clinic",
  description:
    "Restore your hairline with a personalised transplant designed to complement your facial features and achieve natural-looking density at Realdense Clinic.",
};

export default function CustomHairPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <CustomHairHero />
        <CustomHairOverview />
        <CustomHairIdealCandidate />
        <CustomHairPatientResults />
        <CustomHairTypes />
        <CustomHairProcess />
        <CustomHairStepProcedure />
        <CustomHairBenefits />
        <CustomHairCostOverview />
        <CustomHairCausesOfHairLoss />
        <CustomHairWhyChoose />
        <CustomHairPostSurgerySupport />
        <CustomHairDosAndDonts />
        <PatientReviews />
        <CustomHairRecovery />
        <CustomHairFaq />
        <CustomHairComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
