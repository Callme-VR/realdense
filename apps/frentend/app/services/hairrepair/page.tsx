import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HairRepairHero from "@/components/Hair_repair_pages/HairRepairHero";
import HairRepairOverview from "@/components/Hair_repair_pages/HairRepairOverview";
import HairRepairIdealCandidate from "@/components/Hair_repair_pages/HairRepairIdealCandidate";
import HairRepairPatientResults from "@/components/Hair_repair_pages/HairRepairPatientResults";
import HairRepairTypes from "@/components/Hair_repair_pages/HairRepairTypes";
import HairRepairProcess from "@/components/Hair_repair_pages/HairRepairProcess";
import HairRepairStepProcedure from "@/components/Hair_repair_pages/HairRepairStepProcedure";
import HairRepairBenefits from "@/components/Hair_repair_pages/HairRepairBenefits";
import HairRepairCostOverview from "@/components/Hair_repair_pages/HairRepairCostOverview";
import HairRepairCausesOfHairLoss from "@/components/Hair_repair_pages/HairRepairCausesOfHairLoss";
import HairRepairWhyChoose from "@/components/Hair_repair_pages/HairRepairWhyChoose";
import HairRepairPostSurgerySupport from "@/components/Hair_repair_pages/HairRepairPostSurgerySupport";
import HairRepairDosAndDonts from "@/components/Hair_repair_pages/HairRepairDosAndDonts";
import HairRepairRecovery from "@/components/Hair_repair_pages/HairRepairRecovery";
import HairRepairFaq from "@/components/Hair_repair_pages/HairRepairFaq";
import HairRepairComparison from "@/components/Hair_repair_pages/HairRepairComparison";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "Hair Transplant Repair - Corrected Hairline, Natural–Looking Results | Realdense Clinic",
  description:
    "Hair transplant repair solutions tailored by experts at RealDense, using advanced techniques to address unsatisfactory results from previous procedures.",
};

export default function HairRepairPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HairRepairHero />
        <HairRepairOverview />
        <HairRepairIdealCandidate />
        <HairRepairPatientResults />
        <HairRepairTypes />
        <HairRepairProcess />
        <HairRepairStepProcedure />
        <HairRepairBenefits />
        <HairRepairCostOverview />
        <HairRepairCausesOfHairLoss />
        <HairRepairWhyChoose />
        <HairRepairPostSurgerySupport />
        <HairRepairDosAndDonts />
        <PatientReviews />
        <HairRepairRecovery />
        <HairRepairFaq />
        <HairRepairComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
