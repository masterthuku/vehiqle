import HomeSearch from '@/components/HomeSearch'
import React from 'react'

const Home = () => {
  return (
    <div className='pt-20 flex flex-col'>
      <section className='relative py-16 md:py-28 dotted-background'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <h1 className='text-5xl md:text-8xl mb-4 gradient-title'>
              Find your dream car with Vehiql AI
            </h1>
            <p className='text-xl text-gray-500 mb-8 max-w-2xl mx-auto'>
              Advanced AI-powered car search engine that helps you find the perfect vehicle based on your preferences and needs.
            </p>
          </div>
          <HomeSearch/>
        </div>
      </section>
    </div>
  )
}

export default Home