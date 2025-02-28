import React from 'react'
import Image from 'next/image'
import After from '@/public/BEFORE.png'
import Before from '@/public/AFTER.png'

function Preclaim() {
  return (
    <div className='flex h-screen w-full flex-col'>
      <div className='h-1/3 w-full bg-white bg-opacity-0'>
        <button className='absolute right-8 top-4 scale-x-[1.5] text-4xl font-sans font-light text-white'>
          X
        </button>
      </div>
      <div className='relative h-2/3 w-[100%] overflow-hidden bg-yellow-400'>
        <div className='absolute top-8 ml-4 flex flex-row gap-16 text-xl'>
          <div className='font-sans font-bold text-black'>
            <span>1. BEFORE</span>
            <div className='mt-8'>
              <Image src={After} alt='Profile' width={335} height={304} />
            </div>
          </div>
          <div className='flex-row font-sans font-bold text-black'>
            <span>2. AFTER</span>
            <div className='mt-8'>
              <Image src={Before} alt='' width={335} height={304} />
            </div>
          </div>
        </div>
        <div className='absolute right-4 flex w-1/4 scale-y-150 flex-col justify-end text-left font-sans font-bold leading-tight text-black'>
          <div className='absolute right-6 top-6'>
            <span>
              AFTER THE TEAM REVIEW THE PROOF OF CLEANUP, COME BACK TO CLAIM
              YOUR NEW LEVEL. USUALLY THE PROCESS TAKES FROM 2 TO 12 HOURS.
              CONTACT US IN TELEGRAM GROUP IF YOU HAVE QUESTIONS OR FOR
              TROUBLESHOOTING
            </span>
            <div className='right-6 mt-20 text-center text-3xl'>IN REVIEW</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preclaim
