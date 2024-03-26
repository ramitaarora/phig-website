import React from 'react'
import HomepageCards from '../components/HomepageCards'
import PheaturedEvent from '../components/PheaturedEvent'
import PheaturedBook from '../components/PheaturedBook'
import Leaderboard from '../components/Leaderboard'
import Goals from '../components/Goals'
import Newsfeed from '../components/Newsfeed'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-banner-container'>
            <div className='hero-image'>
                {/* <img className='bgImg' src={BannerBackground} alt='PHIG Spring Butterfly Habitat' /> */}
            <div className='home-text-section'>
                <h1 className='primary-heading'>Living Landscapes</h1>
                <p className='primary-text'>A California Habitats Garden that protects and conserves vegetation & wildlife critical to our planet.</p>
                <button className='secondary-button'>
                    Our Impact
                </button>
                </div>
            </div>
        </div>
        <HomepageCards />

        <PheaturedEvent />

        <PheaturedBook />
        
        <Leaderboard />
        
        <Goals />

        <Newsfeed />
    </div>
  )
}

export default Home;