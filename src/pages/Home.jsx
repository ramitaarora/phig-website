import React from 'react'
import HomepageCards from '../components/HomepageCards'
import PheaturedEvent from '../components/PheaturedEvent'
import PheaturedBook from '../components/PheaturedBook'
import Leaderboard from '../components/Leaderboard'
import Goals from '../components/Goals'
import Newsfeed from '../components/Newsfeed'
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

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
                        <Link to="/approach"><button className='secondary-button' style={{borderRadius:'15px 0px 15px 0px'}}>
                            Our Impact
                        </button></Link>
                    </div>
                </div>
            </div>
            <HomepageCards />

            <PheaturedEvent />
            <div>
                <img style={{marginBottom:'-107px', marginLeft:'1000px'}} src="./images/homepage/butterfly.png" alt="butterfly" />
            </div>
            <PheaturedBook />

            <Leaderboard />

            <Goals />

            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="newsfeed-header">
                <h3 style={{marginTop:'50px',marginBottom:'30px', color:'#539B42'}} >Our Blogs</h3>
                <h1 style={{marginBottom:'20px'}}>Latest <span style={{color:'#539B42'}}>Blogs & Articles</span></h1>
                <p style={{fontSize:'small'}}>Be the first to know about recent garden projects, volunteer opportunities, and gardening tips!</p>
            </section>

            <Newsfeed />
        </div>
    )
}

export default Home;