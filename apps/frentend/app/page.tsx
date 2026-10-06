import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import BlueWaveBackground from "@/components/HeroBackground";
import OurPromise from "@/components/OurPromise";
import OurApproach from "@/components/OurApproach";
import PatientResults from "@/components/PatientResults";
import WhyChooseIndia from "@/components/WhyChooseIndia";

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
    </div>
  );
}


