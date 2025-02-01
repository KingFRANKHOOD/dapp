import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '../../components/ui/card'
  import React from 'react'
  
  const List: React.FC = () => {
    return (
      <div className='flex relative min-h-screen flex-col items-center  overflow-hidden bg-[#010c03] px-4 py-10 text-white md:px-10'>
        {/* Title Section */}
        <div className='mb-5 max-w-6xl text-center font-Bebas text-2xl font-bold md:mb-8 md:text-4xl lg:text-6xl mt-10'>
          FIRST DAPP TO SELF-TOKENIZE{' '}
          <span className='bg-gradient-to-r from-[#1BE4D2] via-[#01FC88] to-[#01FC88] bg-clip-text text-transparent'>
            ENVIRONMENTAL CLEANUP EFFORTS
          </span>
        </div>
  
        {/* Subtitle Section */}
        <div className='mb-10 max-w-5xl text-center font-Bebas text-lg font-bold text-[#cac7c780] md:mb-5 md:text-2xl lg:text-4xl'>
          Apply with your cleanup results tooo receive a decleanup impact product,
          progress through levels, and earn the utility token $dcu
        </div>
  
        <button className='relative overflow-hidden rounded-full border-2 border-[#1BE4D2] bg-transparent px-10 py-2 text-xl font-bold mt-10'>
          <span className='bg-gradient-to-r from-[#1BE4D2] to-[#01FC88] bg-clip-text text-transparent'>
            Login
          </span>
          <span className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#1BE4D2] to-[#01FC88]'></span>
        </button>
  
        <div className='absolute -right-28 -top-20 z-0 h-64 w-64 rounded-full bg-[#1E8428] opacity-20 shadow-2xl blur-lg md:h-[356px] md:w-[356px]'></div>
        <div className='absolute -bottom-20 -left-28 z-0 h-64 w-64 rounded-full bg-[#1E8428] opacity-30 shadow-2xl blur-lg md:h-[356px] md:w-[356px]'></div>
      </div>
    )
  }
  
  export default List
  