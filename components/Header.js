import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {CheckBadgeIcon,CircleStackIcon,HomeIcon,BoltIcon,MagnifyingGlassIcon,UserIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div>
      <header className='flex flex-col items-center justify-between sm:flex-row m-5' >
        <div className='flex flex-grow justify-evenly max-w-2xl' >
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={BoltIcon} />
            <HeaderItem title="vERIFIED" Icon={CheckBadgeIcon} />
            <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image className='object-contain' alt='img' src="https://links.papareact.com/ua6" width={200} height={200} />
      </header>
      
    </div>
  )
}

export default Header
