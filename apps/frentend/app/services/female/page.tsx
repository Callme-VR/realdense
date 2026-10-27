import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FemaleHero from "@/components/Female_hair_Pages/FemaleHero";
import FemaleOverview from "@/components/Female_hair_Pages/FemaleOverview";
import FemaleIdealCandidate from "@/components/Female_hair_Pages/FemaleIdealCandidate";
import FemalePatientResults from "@/components/Female_hair_Pages/FemalePatientResults";
import FemaleTypes from "@/components/Female_hair_Pages/FemaleTypes";
import FemaleProcess from "@/components/Female_hair_Pages/FemaleProcess";
import FemaleStepProcedure from "@/components/Female_hair_Pages/FemaleStepProcedure";
import FemaleBenefits from "@/components/Female_hair_Pages/FemaleBenefits";
import FemaleCostOverview from "@/components/Female_hair_Pages/FemaleCostOverview";
import FemaleCausesOfHairLoss from "@/components/Female_hair_Pages/FemaleCausesOfHairLoss";
import FemaleWhyChoose from "@/components/Female_hair_Pages/FemaleWhyChoose";
import FemalePostSurgerySupport from "@/components/Female_hair_Pages/FemalePostSurgerySupport";
import FemaleDosAndDonts from "@/components/Female_hair_Pages/FemaleDosAndDonts";
import FemaleRecovery from "@/components/Female_hair_Pages/FemaleRecovery";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title:
    "Female Hair Transplant - Fuller Hair, Natural–Looking Results | Realdense Clinic",
  description:
    "A personalised hair restoration approach designed to improve hair density, restore thinning areas, and achieve natural-looking results tailored to each woman’s needs at Realdense Clinic.",
};

export default function FemalePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <FemaleHero />
        <FemaleOverview />
        <FemaleIdealCandidate />
        <FemalePatientResults />
        <FemaleTypes />
        <FemaleProcess />
        <FemaleStepProcedure />
        <FemaleBenefits />
        <FemaleCostOverview />
        <FemaleCausesOfHairLoss />
        <FemaleWhyChoose />
        <FemalePostSurgerySupport />
        <FemaleDosAndDonts />
        <PatientReviews />
        <FemaleRecovery />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
