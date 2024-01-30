import React from 'react'
import Navbar from '../components/Navbar'
// import BannerBackground from "../assets/PHIG_spring_2023_butterfly_habitat_1.png"

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
    </div>
  )
}

export default Home