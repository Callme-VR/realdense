import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import BlueWaveBackground from "@/components/HeroBackground";
import OurPromise from "@/components/OurPromise";
import OurApproach from "@/components/OurApproach";
import PatientResults from "@/components/PatientResults";
import WhyChooseIndia from "@/components/WhyChooseIndia";
import OurProcess from "@/components/OurProcess";
import OurServices from "@/components/OurServices";
import TransparentPricing from "@/components/TransparentPricing";
import PatientReviews from "@/components/PatientReviews";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <BlueWaveBackground>
        <main className="pt-[76px]">
          <HomePage />
        </main>
      </BlueWaveBackground>
      <OurPromise />
      <OurApproach />
      <PatientResults />
      <WhyChooseIndia />
      <OurProcess />
      <OurServices />
      <TransparentPricing />
      <PatientReviews />
      <FAQSection />
      <Footer />
    </div>
  );
}


