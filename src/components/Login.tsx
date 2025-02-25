"use client";

import React, { useState } from 'react';
import Stellar from "@/./public/stellar.png";
import Image from 'next/image';

const Login: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
    className="min-h-screen flex flex-col border-8  rounded-3xl m-4"
    style={{ backgroundColor: '#58b12f' }}
  >
    {/* Header */}
    <header className="mb-4 flex flex-wrap justify-between items-center p-4">
      <h1
        className="text-lg md:text-2xl lg:text-3xl xl:text-4xl"
        style={{
          backgroundColor: '#FAFF00',
          width: '250px',
          height: '40px',
          marginTop: '18px',
          marginLeft: '10px',
          fontWeight: 400,
          lineHeight: '26.51px',
          letterSpacing: '-0.02em',
          textAlign: 'right',
          padding: '10px 10px',
          boxSizing: 'border-box',
        }}
      >
        DECLEANUP NETWORK
      </h1>
  
      <div className="flex justify-end items-center mr-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <div className="w-8 h-1 bg-black mb-1"></div>
          <div className="w-8 h-1 bg-black mb-1"></div>
          <div className="w-8 h-1 bg-black"></div>
        </button>
        {menuOpen && (
          <div
            className="absolute right-0 mt-2 w-48 border border-gray-300 rounded shadow-lg"
            style={{ backgroundColor: '#FAFF00' }}
          >
            <a href="#" className="block px-4 py-2 text-black hover:border-l-4 hover:border-green-500">DASHBOARD</a>
            <a href="#" className="block px-4 py-2 text-black hover:border-l-4 hover:border-green-500">LEADERBOARD</a>
            <a href="#" className="block px-4 py-2 text-black hover:border-l-4 hover:border-green-500">APPLY WITH CLEANUP RESULTS</a>
          </div>
        )}
      </div>
    </header>
  
    <hr className="border-t-2 border-black w-full my-4" />
  
    {/* Main Content */}
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <h2
        className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mb-4 text-center px-4"
        style={{
          whiteSpace: 'normal',
          maxWidth: '100%',
          wordBreak: 'break-word',
          lineHeight: '1.2',
        }}
      >
        DECLEANUP REWARDS
      </h2>
  
      <hr className="border-t-2 border-black w-full my-4" />
  
      <div className="flex flex-col gap-4 text-center px-4">
        <p className="mb-4 text-base md:text-lg lg:text-xl xl:text-2xl underline">
          FIRST DAPP TO SELF-TOKENIZE ENVIRONMENTAL CLEANUP EFFORTS
        </p>
        <p
          className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl"
          style={{ lineHeight: '1' }}
        >
          APPLY WITH YOUR CLEANUP RESULTS TO RECEIVE A DECLEANUP IMPACT PRODUCT, PROGRESS THROUGH LEVELS AND EARN POINTS, REDEEMABLE IN THE FUTURE
        </p>
      </div>
  
      <hr className="border-t-2 border-black w-full my-4" />
  
      <button
        className="w-full py-4 bg-black text-yellow-500 font-bold rounded hover:bg-gray-800"
        style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          color: '#FAFF00',
          margin: '20px 0',
        }}
      >
        CONNECT WALLET
      </button>
  
      <hr className="border-t-2 border-black w-full my-4" />
    </div>
  
    {/* Footer */}
    <footer
      className="mt-auto flex flex-col md:flex-row justify-between items-center p-4"
      style={{ width: 'calc(100% - 40px)' }}
    >
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-0">CLEAN UP, SNAP, EARN</p>
      <span className="mb-2 md:mb-0">
        <Image src={Stellar} alt="stellar logo" width={100} height={50} />
      </span>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm lg:text-base xl:text-lg">
        <a href="#" className="hover:underline">Telegram</a>
        <a href="#" className="hover:underline">GitHub</a>
        <a href="#" className="hover:underline">Litepaper</a>
        <a href="#" className="hover:underline">Bug Report</a>
      </div>
    </footer>
  </div>
  );
};

export default Login;
