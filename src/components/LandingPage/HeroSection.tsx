"use client"
import { useState } from "react";

const HeroSection: React.FC = () => {

   const [walletAddress, setWalletAddress]=useState('')




  return (
    <div className="relative bg-[#010c03] text-white h-screen flex flex-col items-center  overflow-hidden">
      {/* header */}
     

      {/* Main Content */}
      <div className="flex items-center flex-col mt-10 md:mt-20 px-4 text-center">
        <div className="text-5xl md:text-7xl lg:text-[180px] font-medium font-Bebas">
          DECLEANUP{' '}
          <span className="bg-gradient-to-r from-[#1BE4D2] via-[#01FC88] to-[#01FC88] bg-clip-text text-transparent">
            REWARD
          </span>
        </div>

        <div className="text-lg md:text-3xl mb-6 md:mb-10 max-w-5xl text-[#B2B1B180] font-Bebas mt-10 md:mt-3">
          We recognize and reward your efforts to improve the environment. By
          cleaning up, uploading a photo, and receiving a dynamic NFT, changing
          with each level, you get a permanent, on-chain proof of your positive
          impact. Join us in making the world a cleaner place, one action at a
          time.
        </div>

        <div className="flex justify-center w-full mt-10 rounded-xl overflow-hidden ">
          <button className="bg-[#008060] text-lg md:text-2xl px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-[#00a078] cursor-pointer">
            CONNECT WALLET
          </button>
        </div>
      </div>

      {/* effects */}
      <div className="absolute -top-20 -right-28 rounded-full blur-lg w-64 h-64 md:w-[356px] md:h-[356px] shadow-2xl bg-[#1E8428] z-0 opacity-30"></div>
      <div className="absolute top-40 left-0 w-48 h-48 md:w-[341px] md:h-[356px] shadow-2xl bg-[url('/6.png.png')] bg-cover bg-center"></div>
      <div className="absolute -bottom-20 -left-28 rounded-full blur-lg w-64 h-64 md:w-[356px] md:h-[356px] shadow-2xl bg-[#1E8428] z-0 opacity-30"></div>
    </div>
  );
};

export default HeroSection; 
