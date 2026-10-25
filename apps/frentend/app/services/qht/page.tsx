import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QhtHero from "@/components/QHT_pages/Qhthero";
import OverviewQht from "@/components/QHT_pages/Overviewqht";
import IdealCandidateQht from "@/components/QHT_pages/IdealCandidateqht";
import PatientResultsQht from "@/components/QHT_pages/PatientResultsqht";
import TypesOfFueQht from "@/components/QHT_pages/TypesOfFueqht";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";
import StepByStepProcedureQht from "@/components/QHT_pages/StepByStepProcedureqht";
import BenefitsQht from "@/components/QHT_pages/Benefitsqht";
import CostOverviewQht from "@/components/QHT_pages/CostOverviewqht";
import CausesOfHairLossQht from "@/components/QHT_pages/CausesOfHairLossqht";
import OurProcess2Qht from "@/components/QHT_pages/OurProcess2qht";
import PostSurgerySupportQht from "@/components/QHT_pages/PostSurgerySupportqht";
import DosAndDontsQht from "@/components/QHT_pages/DosAndDontsqht";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import Recoveryjourneryqht from "@/components/QHT_pages/Recoveryjourneryqht";
import Faqqht from "@/components/QHT_pages/Faqqht";
import TechniqueComparison from "@/components/Fut_pages/TechniqueComparison";
import GetInTouch from "@/components/Services_pages/GetinTouch";

export const metadata: Metadata = {
  title: "QHT Hair Transplant - Advanced Precision, Faster Recovery | Realdense Clinic",
  description:
    "A specialised hair restoration technique using Superfine Cole Punches and SAVA implanters for precise follicle extraction and placement at Realdense Clinic.",
};

export default function QhtPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <QhtHero />
        <OverviewQht />
        <IdealCandidateQht />
        <PatientResultsQht />
        <TypesOfFueQht />
        <OurprocessQht />
        <StepByStepProcedureQht />
        <BenefitsQht />
        <CostOverviewQht />
        <CausesOfHairLossQht />
        <OurProcess2Qht />
        <PostSurgerySupportQht />
        <DosAndDontsQht />
        <PatientReviews />
        <Recoveryjourneryqht />
        <Faqqht />
        <TechniqueComparison />
        <GetInTouch />
      </main>
      <Footer hideCta />
    </div>
  );
}
