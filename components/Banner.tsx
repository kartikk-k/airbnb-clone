import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[200px] sm:h-[400px] lg:h-[400px]'>
            {/* banner image */}
            <Image fill={true} className='object-cover' src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOQjj359Oea8qY8trMQNIdVn_NiSKeLEDj6yyH1kguRvcZjxp03ayhaxDr0MZcz_kwdPAnvjeB2HvKGBzRKJcUKW0g3N=w1864-h848" alt='banner' />

            {/* call to action */}
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='p-4 space-y-2 bg-black rounded-md backdrop-blur-sm bg-opacity-40'>
                    <p className='text-sm font-medium text-center text-white sm:text-base'>Not sure where to go?</p>
                    <div className='flex justify-center'>
                        <button className='px-2 py-2 text-sm font-semibold duration-500 bg-white rounded-full hover:shadow-lg'>I'm Flexible</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner