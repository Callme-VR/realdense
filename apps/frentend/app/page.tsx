import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home_pages/HomePage";
import BlueWaveBackground from "@/components/Home_pages/HeroBackground";
import OurPromise from "@/components/Home_pages/OurPromise";
import OurApproach from "@/components/Home_pages/OurApproach";
import PatientResults from "@/components/Home_pages/PatientResults";
import WhyChooseIndia from "@/components/Home_pages/WhyChooseIndia";
import OurProcess from "@/components/Home_pages/OurProcess";
import OurServices from "@/components/Home_pages/OurServices";
import TransparentPricing from "@/components/Home_pages/TransparentPricing";
import PatientReviews from "@/components/Home_pages/PatientReviews";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <BlueWaveBackground>
        <main>
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


