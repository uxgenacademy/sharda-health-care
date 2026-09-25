import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutDoctors from "@/components/AboutDoctors";
import Services from "@/components/Services";
import WhySharda from "@/components/WhySharda";
import Reviews from "@/components/Reviews";
import TimingContact from "@/components/TimingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutDoctors />
      <Services />
      <WhySharda />
      <Reviews />
      <TimingContact />
    </main>
  );
}