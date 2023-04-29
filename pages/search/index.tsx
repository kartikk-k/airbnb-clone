import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchFilters from '../../components/SearchFilters'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import PropertyCard from '../../components/PropertyCard'
import Map from '../../components/Map'
import { MapIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


interface Props {
    searchResults: PropertyObject[]
}

function index({ searchResults }: Props) {

    const [formattedStartDate, setFormattedStartDate] = useState<string>()
    const [formattedEndDate, setFormattedEndDate] = useState<string>()
    const [range, setRange] = useState<number>()

    const [showMap, setShowMap] = useState<boolean>(false)

    const router = useRouter()
    const { location, startDate, endDate, guests } = router.query

    useEffect(() => {
        if (!router.isReady) return

        setFormattedStartDate(format(new Date(startDate as string), 'dd MMM yy'))
        setFormattedEndDate(format(new Date(endDate as string), 'dd MMM yy'))

        const range = new Date(endDate as string).getDate() - new Date(startDate as string).getDate()
        setRange(range + 1)

    }, [router.isReady])


    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name='viewport' content="width=device-width, initial-scale-1, maximum-scale=1" />
                {/* added */}
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
            </Head>


            <main className='min-h-screen pb-10'>
                <Header placeholder={`${location} | ${range} days | ${guests} guests`} />

                <div className='fixed z-[60] flex justify-center w-full lg:hidden bottom-10'>
                    <button onClick={() => setShowMap(!showMap)} className='flex gap-2 p-2 rounded-full bg-primary'>
                        <MapIcon className='w-6 h-6 stroke-white' />
                        <span className='text-white'>{showMap === true ? 'Close Map' : 'Show Map'}</span>
                    </button>
                </div>

                <div className='mx-auto lg:flex max-w-7xl'>
                    <section>
                        <div className='px-4 py-8'>
                            <div className='flex text-xs text-gray-500 md:text-sm'>
                                <span className='pr-2 border-r border-r-gray-300'>
                                    300+ stays
                                </span>
                                <span className='px-2 border-r border-r-gray-300'>
                                    {formattedStartDate} - {formattedEndDate}
                                </span>
                                <span className='px-2'>
                                    {guests} guests
                                </span>
                            </div>
                            <div className='flex items-center justify-between py-1'>
                                <h3 className='text-2xl font-bold text-gray-700 md:text-3xl'>Stays in {location}</h3>
                                <button className='duration-200 active:scale-75 md:hidden'>
                                    <AdjustmentsHorizontalIcon className='p-1 bg-gray-100 rounded-md w-7 h-7 fill-gray-700' />
                                </button>
                            </div>

                            <div className='hidden md:block'>
                                <SearchFilters />
                            </div>
                        </div>

                        <div className='p-4 space-y-4 border-t'>
                            {searchResults?.map((item, index) => (
                                <div key={item.id}>
                                    <PropertyCard property={item} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className='hidden overflow-hidden my-10 mx-4 rounded-md lg:inline-flex max-h-screen sticky top-16 lg:min-w-[550px]'>
                        <Map searchResults={searchResults} />
                    </section>

                    <motion.section
                        initial={{ visibility: 'hidden', opacity: 0 }} // initially map is not rendered
                        animate={{ visibility: showMap ? 'visible' : 'hidden', opacity: showMap ? 1 : 0 }} // just changes opacity once rendered
                        className='fixed top-0 left-0 z-30 w-screen h-screen overflow-hidden bg-white'>
                        <Map searchResults={searchResults} />
                    </motion.section>
                </div>

            </main>

            <Footer />

        </div>
    )
}

export default index




export async function getServerSideProps() {

    const searchResults = await fetch('https://www.jsonkeeper.com/b/C4H8')
        .then((res) => res.json())

    return {
        props: {
            searchResults: searchResults
        }
    }
}

