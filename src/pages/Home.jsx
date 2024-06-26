import React from 'react'
import HomepageCards from '../components/HomepageCards'
import PheaturedEvent from '../components/PheaturedEvent'
import PheaturedBook from '../components/PheaturedBook'
import Leaderboard from '../components/Leaderboard'
import HomepageGoals from '../components/HomepageGoals'
import Newsfeed from '../components/Newsfeed'
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className={css`margin: 0; padding: 0; height: 555px; overflow: hidden;`}>
                <div className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("./images/homepage/homepage-banner.png"); height: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; position: relative;`}>
                    <div className={css`text-align: left; position: absolute; top: 50%; left: 30%; transform: translate(-50%, -50%); color: white; display: flex; flex-direction: column; align-items: flex-start;`}>
                        <h1>Living Landscapes</h1>
                        <p className={css`font-size:medium; font-weight: 400; max-width: 500px; margin: 1.5rem 0rem; line-height: 1.75rem;`}>A California Habitats Garden that protects and conserves vegetation & wildlife critical to our planet.</p>
                        <Link to="/approach"><button className='green-button' style={{ borderRadius: '15px 0px 15px 0px' }}>
                            Our Impact
                        </button></Link>
                    </div>
                </div>
            </div>
            <HomepageCards />

            <PheaturedEvent />
            <div>
                <img style={{ marginBottom: '-107px', marginLeft: '1000px' }} src="./images/homepage/butterfly.png" alt="butterfly" loading="lazy"/>
            </div>
            <PheaturedBook />

            <Leaderboard />

            <HomepageGoals />

            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="newsfeed-header">
                <h3 style={{ marginTop: '50px', marginBottom: '30px', color: '#539B42' }} >Our Blogs</h3>
                <h1 style={{ marginBottom: '20px' }}>Latest <span className={css`color: var(--success); font-family: 'Inria Serif', sans-serif;`}>Blogs & Articles</span></h1>
                <p style={{ fontSize: 'small' }}>Be the first to know about recent garden projects, volunteer opportunities, and gardening tips!</p>
            </section>

            <Newsfeed />
        </div>
    )
}

export default Home;