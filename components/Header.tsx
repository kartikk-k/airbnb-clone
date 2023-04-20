import React from 'react'
import { AirbnbLogo } from './Icons'
import { Bars3Icon, MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='sticky top-0 z-40 flex items-center justify-between px-2 py-4 mx-auto space-x-2 border-b max-w-7xl md:px-4'>

                {/* left section */}
                <div className='w-6 overflow-hidden md:w-auto'>
                    {/* logo */}
                    <AirbnbLogo classname="h-6 cursor-pointer" />
                </div>

                {/* middle section */}
                <div className='flex justify-between flex-1 border border-gray-300 rounded-full max-w-[400px]'>
                    <input type="text" id='search' placeholder='Start your search' className='flex-1 px-2 text-xs bg-transparent rounded-full placeholder:text-gray-600 w-7 sm:w-auto focus:outline-none' />
                    <MagnifyingGlassCircleIcon className='p-1 cursor-pointer h-9 fill-primary' />
                </div>

                {/* right section */}
                <div className='flex space-x-2 md:space-x-4'>
                    <div className='flex items-center space-x-1 md:space-x-2'>
                        <a href="" className='hidden text-sm text-gray-600 sm:inline'>Airbnb your home</a>
                        <GlobeAltIcon className='h-5 stroke-gray-600' />
                    </div>
                    <div className='flex p-1 space-x-1 border border-gray-300 rounded-full'>
                        <Bars3Icon className='h-6 fill-slate-600' />
                        <UserCircleIcon className='h-6 fill-slate-600' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header