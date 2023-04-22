import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-gray-100 border-t border-t-gray-300'>
            <div className='grid grid-cols-2 p-4 pb-8 mx-auto max-w-7xl gap-y-4 md:grid-cols-3 lg:grid-cols-4'>
                <div>
                    <h3 className='py-4 font-semibold text-gray-800'>ABOUT</h3>
                    <div className='space-y-4 text-sm text-gray-500'>
                        <p className='cursor-pointer'>How Airbnb works?</p>
                        <p className='cursor-pointer'>Investors</p>
                        <p className='cursor-pointer'>Airbnb Plus</p>
                        <p className='cursor-pointer'>Airbnb Luxe</p>
                    </div>
                </div>

                <div>
                    <h3 className='py-4 font-semibold text-gray-800'>COMMUNITY</h3>
                    <div className='space-y-4 text-sm text-gray-500'>
                        <p className='cursor-pointer'>Accessibility</p>
                        <p className='cursor-pointer'>Refernal Program</p>
                        <p className='cursor-pointer'>Blog Posts</p>
                        <p className='cursor-pointer'>Newsletter</p>
                    </div>
                </div>

                <div>
                    <h3 className='py-4 font-semibold text-gray-800'>DEVELOPER</h3>
                    <div className='space-y-4 text-sm text-gray-500'>
                        <p className='cursor-pointer'>Jobs</p>
                        <p className='cursor-pointer'>Github</p>
                        <p className='cursor-pointer'>Open-source</p>
                        <p className='cursor-pointer'>Hackathon</p>
                    </div>
                </div>

                <div>
                    <h3 className='py-4 font-semibold text-gray-800'>SUPPORT</h3>
                    <div className='space-y-4 text-sm text-gray-500'>
                        <p className='cursor-pointer'>Help Center</p>
                        <p className='cursor-pointer'>Trust & Safety</p>
                        <p className='cursor-pointer'>Privacy Policy</p>
                        <p className='cursor-pointer'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer