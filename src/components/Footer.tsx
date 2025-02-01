import React from "react";
import Image from "next/image";

import TwitterIcon from "@/public/X.png";
import GithubIcon from "@/./public/github.png";
import TelegramIcon from "@/./public/Item.png";
import crackIcon from "@/./public/Vector.png";

const Footer: React.FC = () => {
    return (
      <div className="bg-[#010c03] text-white flex flex-col items-center justify-center pt-16 md:pt-28 pb-10">
        {/* Logo Section */}
        <div className="text-black font-Bebas text-2xl font-semibold bg-yellow-400 px-4 py-2 rounded-md">
          DeCleanup
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col items-center p-6 md:p-8 rounded-md w-full max-w-4xl">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-Heebo text-center">
            Join Now for Early Access
          </h2>
  
          {/* Description */}
          <p className="mb-6 font-Nuntio text-center w-full md:w-[70%] text-sm md:text-base">
            Morbi non dignissim erat, a blandit felis nec lorem vel orci varius
            congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi
            molestie, sit amet ornare
          </p>
  
          {/* Email Form */}
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <input
              type="email"
              placeholder="Enter your email....."
              className="bg-[#121212] text-white px-4 py-2 rounded-md w-full md:w-[70%] h-12"
            />
            <button
              type="submit"
              className="border text-white px-4 py-2 rounded-lg w-full md:w-[25%] hover:bg-[#00a078] h-12 transition-colors"
            >
              Subscribe
            </button>
          </form>
  
          {/* Social Icons */}
          <div className="flex mt-10 justify-center space-x-6 w-full max-w-xs">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                alt="discord"
                src={TwitterIcon}
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                alt="discord"
                src={GithubIcon}
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                alt="discord"
                src={TelegramIcon}
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                alt="discord"
                src={crackIcon}
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  