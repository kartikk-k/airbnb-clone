import React, { ReactNode, useEffect, useState } from 'react'
import { AirbnbLogo } from './Icons'
import { Bars3Icon, MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import DatePicker from './DatePicker'
import Link from 'next/link'

interface Props {
    placeholder?: string
}

function Header({ placeholder }: Props) {

    const [searchInput, setSearchInput] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        handleCalendar()
    }, [searchInput])

    const handleCalendar = () => {
        console.log(searchInput)
        if (!searchInput.trim()) return setIsOpen(false)
        setIsOpen(true)
    }

    return (
        <div className='sticky top-0 z-50 bg-white border-b shadow-md'>
            <div className='flex items-center justify-between grid-cols-3 px-2 py-4 mx-auto space-x-2 md:grid max-w-7xl md:px-4'>

                {/* left section */}
                <Link href="/" className='w-6 overflow-hidden md:w-auto'>
                    {/* logo */}
                    <AirbnbLogo classname="h-6 cursor-pointer" />
                </Link>

                {/* middle section */}
                <div className='flex-1 max-w-[400px] w-full'>
                    <div className='flex justify-between border border-gray-300 rounded-full '>
                        <input onFocus={handleCalendar} onChange={(e) => setSearchInput(e.target.value)} type="text" id='search' placeholder={placeholder ? placeholder : 'Start your search'} className='flex-1 px-2 text-xs bg-transparent rounded-full placeholder:text-gray-600 w-7 sm:w-auto focus:outline-none' />
                        <MagnifyingGlassCircleIcon className='p-1 cursor-pointer h-9 fill-primary' />
                    </div>
                </div>

                {/* right section */}
                <div className='flex justify-end'>
                    <div className='flex space-x-2 md:space-x-4'>
                        <div className='flex items-center space-x-1 md:space-x-2'>
                            <a href="" className='hidden text-sm text-gray-600 sm:inline'>Airbnb your home</a>
                            <GlobeAltIcon className='h-5 stroke-gray-600' />
                        </div>
                        <div>
                            <div className='flex p-1 space-x-1 border border-gray-300 rounded-full'>
                                <Bars3Icon className='h-6 fill-slate-600' />
                                <UserCircleIcon className='h-6 fill-slate-600' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    <DatePicker cancel={() => setIsOpen(false)} searchInput={searchInput} />
                )
            }
        </div>
    )
}

export default Header