import Image from "next/image";
import HeroSection from "@/components/LandingPage/HeroSection";
import List from "@/components/LandingPage/Lists";
import Testimonials from "@/components/LandingPage/Testimonials";

export default function Home() {
  return (
    <div className=" overflow-hidden">
       {/* <HeroSection/> */}
       <List/>
       <Testimonials/>
    </div>
  );
}