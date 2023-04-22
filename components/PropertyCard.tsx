import Image from 'next/image'
import React, { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

interface Props {
    property: PropertyObject
}

function PropertyCard({ property }: Props) {

    const [isLiked, setIsLiked] = useState<boolean>(false)

    return (
        <div className='flex gap-4 p-2 duration-200 border rounded-md shadow-md h-44 md:h-60 lg:m-4 hover:bg-gray-100'>
            <div className='w-48 h-auto overflow-hidden rounded-md md:rounded-lg md:w-80'>
                <Image
                    src={property.img}
                    alt={property.title!}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full duration-300 rounded-md hover:scale-110 '
                />
            </div>

            <div className='flex flex-col justify-between w-full'>
                <div>
                    <div className='flex items-center justify-between gap-2'>
                        <p className='text-xs text-gray-500 md:text-sm'>{property.location}</p>
                        <div onClick={() => setIsLiked(!isLiked)} className='p-2 duration-200 rounded-full cursor-pointer active:scale-75'>
                            <HeartIcon className={`w-6 h-6 stroke-red-500 ${isLiked ? 'fill-red-500 ' : 'fill-none'}`} />
                        </div>
                    </div>

                    <h1 className='text-sm md:text-base'>{property.title}</h1>
                    <hr className='w-10 my-2 border-gray-300' />
                    <p className='hidden text-xs text-gray-500 sm:block md:text-sm'>{property.description}</p>
                </div>

                <div className='flex items-end justify-between pt-5'>
                    <div className='flex items-center gap-1'>
                        <StarIcon className='w-4 h-4 text-yellow-400 md:w-5 md:h-5' />
                        <p className='text-xs md:text-sm'>{property.star}</p>
                    </div>

                    <div>
                        <p className='text-sm text-gray-800 md:text-base md:font-semibold'>{property.price}</p>
                        <p className='text-xs text-right text-gray-500 md:text-sm'>{property.total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyCard