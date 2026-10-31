import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HairMenHero from "@/components/Hair_transplant_men/HairMenHero";
import HairMenOverview from "@/components/Hair_transplant_men/HairMenOverview";
import HairMenIdealCandidate from "@/components/Hair_transplant_men/HairMenIdealCandidate";
import HairMenPatientResults from "@/components/Hair_transplant_men/HairMenPatientResults";
import HairMenTypes from "@/components/Hair_transplant_men/HairMenTypes";
import HairMenProcess from "@/components/Hair_transplant_men/HairMenProcess";
import HairRepairStepProcedure from "@/components/Hair_repair_pages/HairRepairStepProcedure";
import HairRepairBenefits from "@/components/Hair_repair_pages/HairRepairBenefits";
import HairRepairCostOverview from "@/components/Hair_repair_pages/HairRepairCostOverview";
import HairRepairCausesOfHairLoss from "@/components/Hair_repair_pages/HairRepairCausesOfHairLoss";
import HairRepairWhyChoose from "@/components/Hair_repair_pages/HairRepairWhyChoose";
import HairRepairPostSurgerySupport from "@/components/Hair_repair_pages/HairRepairPostSurgerySupport";
import HairRepairDosAndDonts from "@/components/Hair_repair_pages/HairRepairDosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import HairMenRecovery from "@/components/Hair_transplant_men/HairMenRecovery";
import HairRepairFaq from "@/components/Hair_repair_pages/HairRepairFaq";
import HairRepairComparison from "@/components/Hair_repair_pages/HairRepairComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "Hair Transplant for Men - Restored Hairline, Renewed Confidence | Realdense Clinic",
  description:
    "Restore thinning areas and receding hairlines with personalised hair restoration designed to achieve fuller, natural-looking results for men at Realdense Clinic.",
};

export default function HairMenPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HairMenHero />
        <HairMenOverview />
        <HairMenIdealCandidate />
        <HairMenPatientResults />
        <HairMenTypes />
        <HairMenProcess />
        <HairRepairStepProcedure />
        <HairRepairBenefits />
        <HairRepairCostOverview />
        <HairRepairCausesOfHairLoss />
        <HairRepairWhyChoose />
        <HairRepairPostSurgerySupport />
        <HairRepairDosAndDonts />
        <PatientReviews />
        <HairMenRecovery />
        <HairRepairFaq />
        <HairRepairComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}

