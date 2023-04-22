import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { useEffect } from 'react'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import Footer from '../components/Footer'


interface Props {
  exploreData: ExploreData[]
  cardsData: CardData[]
}

interface ExploreData {
  id: number,
  distance: string,
  img: string,
  location: string
}

interface CardData {
  id: number,
  img: string,
  title: string,
}

const Home = ({ exploreData, cardsData }: Props) => {

  useEffect(() => {

    console.log("ExploreData", cardsData)
  }, [cardsData])

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content="width=device-width, initial-scale-1, maximum-scale=1" />
        {/* <meta name='theme-color' content='#FF5A5F' /> */}
      </Head>

      <main className=''>
        <Header />
        <Banner />

        <div className='max-w-6xl px-2 py-6 mx-auto space-y-8'>
          {/* explore nearby */}
          <div className='space-y-2'>
            <h1 className='text-xl font-bold text-gray-700 md:text-2xl'>Explore Nearby</h1>

            <div className='flex w-auto overflow-auto sm:overflow-visible scrollbar-light sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {exploreData?.length !== 0 && exploreData.map((item: ExploreData) => (
                <SmallCard key={item.id} distance={item.distance} img={item.img} location={item.location} />
              ))}
            </div>
          </div>

          {/* live anywhere */}
          <div>
            <h1 className='text-xl font-bold text-gray-700 md:text-2xl'>Live Anywhere</h1>

            <div className='flex justify-between gap-4 py-6 overflow-auto lg scrollbar-light'>
              {cardsData?.length !== 0 && cardsData.map((item: CardData) => (
                <MediumCard id={item.id} img={item.img} title={item.title} />
              ))}
            </div>
          </div>



        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {

  // fetches nearby locations data from jsonkeeper.com
  const exploreData = await fetch('https://www.jsonkeeper.com/b/DKSU')
    .then(res => res.json())

  const cardsData = await fetch('https://www.jsonkeeper.com/b/9Y88')
    .then(res => res.json())

  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}
