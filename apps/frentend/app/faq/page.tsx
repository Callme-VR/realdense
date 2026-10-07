import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | Realdense Hair Restoration",
  description:
    "Find answers to the most common questions about hair transplant procedures, FUE, DHI, pricing, and recovery at Realdense.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="pt-[76px] flex-1">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
