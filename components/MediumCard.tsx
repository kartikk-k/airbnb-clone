import Image from 'next/image'
import React from 'react'

interface Props {
    id: number,
    img: string,
    title: string
}

function MediumCard({ id, img, title }: Props) {
    return (
        <div key={id} className='cursor-pointer shrink-0'>
            <Image src={img} className='object-cover w-40 h-40 duration-200 rounded-md shadow-md md:w-60 md:h-60 hover:scale-105' height={500} width={500} alt={title} />
            <h2 className='p-2 text-center text-gray-600'>{title}</h2>
        </div>
    )
}

export default MediumCard