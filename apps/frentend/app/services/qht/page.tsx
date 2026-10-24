import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QhtHero from "@/components/QHT_pages/Qhthero";
import OverviewQht from "@/components/QHT_pages/Overviewqht";

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
      </main>
      <Footer hideCta />
    </div>
  );
}
