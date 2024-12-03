import Link from 'next/link';
import NavLinks from './nav-link';
import Image from 'next/image';
import { Bell, Volume } from 'lucide-react';

export default function SideNav() {
  return (
    <div className="flex md:w-40 h-full flex-col px-1 py-4 md:px-2 bg-gray-100">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md  p-4 md:h-40"
        href="/"
      >
        <div className="w-32 h-32 flex items-center justify-center text-white md:w-40 md:h-40">
          <Image
            src="/LOGO_ERSYS_PRIMARY.png"
            alt="Next.js logo"
            width={2822}
            height={1486}
            priority
          />
        </div>

      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <div className='flex items-center justify-center py-5'>
          <Volume size={34} color="black" />
        </div>
        <div className='flex items-center justify-center py-5'>
          <Bell size={34} color="black" />
        </div>
        <div className=' flex items-center justify-center'>
          <Image
            className="dark:invert rounded-full w-16 h-16"
            src="/personn.png"
            alt="Next.js logo"
            width={1024}
            height={1024}
            priority
          />
        </div>


      </div>
    </div>
  );
}
