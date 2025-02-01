import React from 'react'
import Image from 'next/image'
import { Twitter } from 'lucide-react'
import Avatar from '@/public/image (1).png'

interface ProfileCardProps {
  username: string
  profileImage: string
  level: string
  impactValue: number
  tokenAmount: number
  referralLink: string
}

const page: React.FC<ProfileCardProps> = ({
  username,
  profileImage,
  level,
  impactValue,
  tokenAmount,
  referralLink,
}) => {
  return (
    <div className='h-full w-full bg-[#010c03] p-4 sm:p-8 md:p-14'>
  
  <h2 className='font-Bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center sm:text-left'>
    DECLEANUP REWARDS
  </h2>

  {/* Main Content Container */}
  <div className='flex flex-col items-center'>
    {/* First Container */}
    <div className='relative mt-4 flex w-full flex-col gap-8 rounded-2xl p-4 sm:p-6 md:flex-row'>
      {/* Left Section - Profile Image and User Info */}
      <div className='flex w-full flex-col gap-8 md:w-2/3 md:flex-row'>
        {/* Profile Image */}
        <div className='w-full md:w-1/2'>
          <div className='rounded-xl bg-[#0C150ECC] p-2'>
            <Image
              src={Avatar}
              alt='Profile'
              width={400}
              height={400}
              className='rounded-xl w-full h-auto'
            />
          </div>
        </div>

        {/* User Info */}
        <div className='flex w-full flex-col justify-between gap-4 py-4 md:w-1/2'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <span className='text-xl text-white'>{username}</span>
              <div className='h-2 w-20 rounded-full bg-gradient-to-r from-red-500 to-green-500' />
            </div>

            <button className='flex w-fit items-center gap-2 rounded-full border border-white px-4 py-2 text-white'>
              <Twitter className='h-5 w-5' />
              Connect Twitter
            </button>
          </div>

          <div className='flex flex-col gap-4'>
            <button className='rounded-lg bg-[#00FFA3] px-6 py-3 font-bold text-black'>
              TOKENIZE CLEANUP IMPACT
            </button>
            <button className='rounded-lg border-2 border-[#00FFA3] px-6 py-3 font-bold text-[#00FFA3]'>
              VERIFY IMPACT
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Stats */}
      <div className='w-full rounded-xl md:w-1/3'>
        <h3 className='mb-4 text-xl text-white'>Current impact product</h3>
        <div className='space-y-4'>
          <div className='w-full'>
            <div className='flex justify-between rounded-xl border-b p-2 text-white shadow-xl'>
              <span>Level</span>
              <span>{level} Newbie</span>
            </div>
            <div className='flex justify-between rounded-xl border-b p-3 text-white shadow-lg'>
              <span>IV</span>
              <span>{impactValue} 3</span>
            </div>
            <div className='flex justify-between rounded-xl border-b p-2 text-white shadow-lg'>
              <span>DCU</span>
              <span>{tokenAmount} 30</span>
            </div>
          </div>

          <div className='mt-10 w-full'>
            <h4 className='mb-2 text-white'>Referral link</h4>
            <p className='text-sm text-gray-400'>
              Invite friends and earn more together!
            </p>
            <input
              type='text'
              value={referralLink}
              readOnly
              className='mt-2 w-full rounded-lg bg-black border border-green-300 p-2 text-white'
            />
          </div>
        </div>
      </div>
    </div>

    {/* Second Container - DCU Total */}
    <div className='w-full flex flex-col sm:flex-row justify-between items-center my-16 gap-4 sm:gap-0'>
      <h2 className='text-4xl sm:text-5xl md:text-6xl font-Bebas font-bold'>
        DCU TOTAL
      </h2>
      <span className='w-full sm:w-1/2 h-1 bg-white mt-4 sm:mt-6'></span>
      <h3 className='text-4xl sm:text-5xl md:text-6xl font-Bebas font-bold'>
        109
      </h3>
    </div>

    {/* Third Container - Buttons */}
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-14'>
      <button className='border-4 h-20 rounded-xl text-xl sm:text-2xl font-Bebas font-bold'>
        CREATE IMPACT CIRCLE
      </button>
      <button className='border-4 h-20 rounded-xl text-xl sm:text-2xl font-Bebas font-bold'>
        DISCOVER IMPACT CIRCLES
      </button>
      <button className='border-4 h-20 rounded-xl text-xl sm:text-2xl font-Bebas font-bold'>
        LEADERBOARD
      </button>
      <button className='border-4 h-20 rounded-xl text-xl sm:text-2xl font-Bebas font-bold'>
        SDCU CLAIM/STAKE
      </button>
    </div>
  </div>
</div>
  )
}

export default page
