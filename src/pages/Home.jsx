import React from 'react'
import HomepageCards from '../components/HomepageCards'
import PheaturedEvent from '../components/PheaturedEvent'
import PheaturedBook from '../components/PheaturedBook'
import Leaderboard from '../components/Leaderboard'
import Goals from '../components/Goals'
import Newsfeed from '../components/Newsfeed'
import { css } from '@emotion/css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-banner-container'>
                <div className={css`
                background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./images/homepage/homepage-banner.png");
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
            `}>
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

            <section id="newsfeed-header">
                <h3>Our Blogs</h3>
                <h1>Latest Blogs & Articles</h1>
                <p>Be the first to know about recent garden projects, volunteer opportunities, and gardening tips!</p>
            </section>

            <Newsfeed />
        </div>
    )
}

export default Home;