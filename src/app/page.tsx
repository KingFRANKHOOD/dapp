import Image from "next/image";
import HeroSection from "@/components/landingPage/HeroSection";
import DecleanupDos from "@/components/landingPage/DecleanupDos";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Faqs from "@/components/landingPage/Faqs";
export default function Home() {
  return (
    <div className=" overflow-hidden">
     <HeroSection/>
     <DecleanupDos/>
     <HowItWorks/>
     <Faqs/>
    </div>
  );
}