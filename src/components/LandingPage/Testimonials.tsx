import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image1 from "@/./public/2-7.png.png";
import Image2 from "@/./public/3-6.png.png";
import Image3 from "@/./public/4-6.png.png";

import Abitrum from "@/./public/Abitrum.png";
import polygon from "@/./public/polygon.png";
import SuperEc from "@/./public/supar.png";

import Image from "next/image";
const Testimonials: React.FC = () => {
     return (
  <div className="bg-[#010c03] text-white py-10 md:py-16 px-4 md:px-8 lg:px-16">
    <div className="container mx-auto w-[90%]">
      {/* Testimonials Grid */}
    

      {/* Ecosystem Support Section */}
      <div className="flex justify-center mt-10 overflow-hidden"> 
        <div className="scrolling-container"> 
          {/* Arbitrum */}
          <div className="flex flex-row items-center justify-center py-2 px-4 border-none h-12 md:w-[273.59px] md:h-[116.84px] rounded bg-black">
            <Image
              src={Abitrum}
              alt="icon1"
              width={500}
              height={500}
              className="w-7 h-7"
            />
            <div className="font-medium ml-2">Arbitrum</div>
          </div>

          {/* Polygon ZK */}
          <Card className="flex flex-row items-center justify-center py-2 px-4 border-none h-12 md:w-[273.59px] md:h-[116.84px] rounded bg-black">
            <Image
              src={polygon}
              alt="icon1"
              width={500}
              height={500}
              className="w-7 h-7"
            />
            <div className="font-medium ml-2 text-[#6A13AB]">
              Polygon ZK EVM
            </div>
          </Card>

          {/* Supra */}
          <Card className="flex flex-row items-center py-2 px-4 border-none h-12 md:w-[273.59px] md:h-[116.84px] rounded bg-black">
            <div className="ml-2 font-extrabold w-full h-full flex items-center justify-center">
              Superchain <span className="text-red-700">Eco</span>
            </div>
          </Card>

          {/* Coming Soon */}
          <Card className="flex flex-row items-center justify-center py-2 px-4 border-none h-12 md:w-[273.59px] md:h-[116.84px] rounded bg-black">
            <Image
              src={SuperEc}
              alt="icon1"
              width={500}
              height={500}
              className="w-7 h-7"
            />
            <p className="font-medium ml-2 text-xs text-[#FFFFFF]">
              Supra Coming soon ....
            </p>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
};

export default Testimonials;
