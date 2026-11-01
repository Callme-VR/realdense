import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrownHairHero from "@/components/Crown_hair_pages/CrownHairHero";
import CrownHairOverview from "@/components/Crown_hair_pages/CrownHairOverview";
import CrownHairIdealCandidate from "@/components/Crown_hair_pages/CrownHairIdealCandidate";
import CrownHairPatientResults from "@/components/Crown_hair_pages/CrownHairPatientResults";
import CrownHairTypes from "@/components/Crown_hair_pages/CrownHairTypes";
import CrownHairProcess from "@/components/Crown_hair_pages/CrownHairProcess";
import HairRepairStepProcedure from "@/components/Hair_repair_pages/HairRepairStepProcedure";
import CrownHairBenefits from "@/components/Crown_hair_pages/CrownHairBenefits";
import CrownHairCostOverview from "@/components/Crown_hair_pages/CrownHairCostOverview";
import HairRepairCausesOfHairLoss from "@/components/Hair_repair_pages/HairRepairCausesOfHairLoss";
import CrownHairWhyChoose from "@/components/Crown_hair_pages/CrownHairWhyChoose";
import HairRepairPostSurgerySupport from "@/components/Hair_repair_pages/HairRepairPostSurgerySupport";
import HairRepairDosAndDonts from "@/components/Hair_repair_pages/HairRepairDosAndDonts";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import CrownHairRecovery from "@/components/Crown_hair_pages/CrownHairRecovery";
import CrownHairFaq from "@/components/Crown_hair_pages/CrownHairFaq";
import CrownHairComparison from "@/components/Crown_hair_pages/CrownHairComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "Crown Hair Transplant - Fuller Crown Coverage, Natural–Looking Results | Realdense Clinic",
  description:
    "Restore thinning crown areas with a personalised hair transplant designed to improve density and blend naturally with existing hair at Realdense Clinic.",
};

export default function CrownHairPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <CrownHairHero />
        <CrownHairOverview />
        <CrownHairIdealCandidate />
        <CrownHairPatientResults />
        <CrownHairTypes />
        <CrownHairProcess />
        <HairRepairStepProcedure />
        <CrownHairBenefits />
        <CrownHairCostOverview />
        <HairRepairCausesOfHairLoss />
        <CrownHairWhyChoose />
        <HairRepairPostSurgerySupport />
        <HairRepairDosAndDonts />
        <PatientReviews />
        <CrownHairRecovery />
        <CrownHairFaq />
        <CrownHairComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}

