import { promises } from 'dns'
import Link from 'next/link'
interface HeaderProps {
  connectWallet: () => Promise<void>
}

const Header: React.FC = () => {
  return (
    <div className='mt-4 w-full bg-[#010c03]'>
      <nav className='w-full bg-transparent px-4'>
        <div className='flex flex-wrap items-center justify-between p-4'>
          <Link href={"/"} className='font-Bebas rounded-md bg-yellow-400 px-4 py-2 text-2xl font-semibold text-black'>
            DeCleanup
          </Link>

          {/* connect wallet button */}
          <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <button className='relative hidden overflow-hidden rounded-full border-2 border-[#1BE4D2] bg-transparent px-4 py-2 text-xl font-bold md:flex'>
              <span className='text-bold bg-gradient-to-r from-[#1BE4D2] to-[#01FC88] bg-clip-text text-2xl text-transparent'>
                CONNECT WALLET
              </span>
              <span className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#1BE4D2] to-[#01FC88]'></span>
            </button>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>

          {/* navigation bar */}
          <div className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'>
            <ul className='mt-4 flex flex-col p-4 font-medium md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse'>
              <Link
                className='block rounded-sm px-3 py-2 text-3xl font-bold text-white'
                href={'/earn'}
              >
                EARN
              </Link>
              <li>
                <a
                  href='#'
                  className='block rounded-sm px-3 py-2 text-3xl font-bold text-white'
                >
                  CLEAN UP
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded-sm px-3 py-2 text-3xl font-bold text-white'
                >
                  SNAP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
