import Image from 'next/image'
import React from 'react'

interface Props {
    key: number,
    img: string,
    location: string,
    distance: string
}

function SmallCard({ img, location, distance, key }: Props) {
    return (
        <div key={key} className='flex gap-4 p-2 m-1 duration-200 rounded-md cursor-pointer shrink-0 hover:scale-105 hover:bg-gray-200 '>
            <Image src={img} width={50} height={50} className='w-12 h-12 rounded-md' alt={location} />
            <div>
                <h2 className='text-gray-700'>{location}</h2>
                <h3 className='text-sm text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard