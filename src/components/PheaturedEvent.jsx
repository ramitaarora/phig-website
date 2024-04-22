import { css } from '@emotion/css';

export default function PheaturedEvent() {
    return (
        <div id="pheatured-event">
            <div id="header" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./images/homepage/earth-day-event.jpeg'); height: 500px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white;`}>
                <h2 className={css`position: relative; top: 300px; margin-left: 80px`}>Earth Day 2024</h2>
                <p className={css`position: relative; top: 300px;margin-left: 80px`}>Hosted by Pleasant Hill Instructional Garden</p>
            </div>

            <div className={css`display: flex; justify-content: space-between; margin: 0 80px;`}>
                <div id="overlay-header" className={css`background-color: rgba(255, 255, 255, 0.95); position: relative; top: -50px; display: flex; width: 60%; text-align: center; padding: 20px; height: 100px; box-shadow: 2px 2px 2px lightgrey;`}>
                    <p className={css`border-right: 1px solid lightgrey;color:#97C159;`}>Master Gardeners' Composting Workshop</p>
                    <p className={css`border-right: 1px solid lightgrey;color:#97C159;`}>Hands-on Demonstrations</p>
                    <p className={css`color:#97C159;`}>Limited Availability Garden Tour</p>
                </div>

                <div id="event-date" className={css`background-color: white; position: relative; top: -150px; width: 25%; padding: 30px; border: 1px solid lightgrey; border-radius: 10px;`}>
                    <div className={css`display: flex; margin-bottom: 10px;`}>
                        <div className={css`margin-right: 20px; border: 2px solid lightgrey;padding: 10px; border-radius: 15px`}>
                            <h2>28</h2>
                            <p>APR</p>
                        </div>
                        <div>
                            <h3>Sunday April 28, 2024</h3>
                            <p style={{ color: 'grey' }}>12:30PM Pacific Time</p>
                            
                        </div>
                        
                    </div>
                    <hr style={{color:'lightgrey', display:'flex'}}></hr>

                    <p style={{color:'grey', fontSize:'small'}}>A <span style={{color:'black', fontSize:'small'}}>confirmation email</span> with more details will be provided after registration.</p>
                    <a href="https://www.eventbrite.com/e/earth-day-2024-free-fun-family-friendly-educational-tickets-833927518657?aff=oddtdtcreator" target="_blank" rel="noreferrer"> <button className={css`border-radius: 10px;margin-top: 30px;height: 40px;width: 200px;cursor: pointer;padding: 4px; border: 6px; font-size: big; background-color: #407D46; color: white;`}>  Register with EventBrite </button> </a>
                </div>
            </div>


            <div id="event-details" className={css`position: relative; top: -100px;margin-left: 80px; margin: 80px`}>
                <h3 style={{fontWeight: 'bold', marginBottom:'20px', marginTop: '-80px'}}>Details</h3>
                <p>This year is the 54rd anniversary of Earth Day. Small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden. </p>
                <p>PHIG & community partners share how we can better provide healthy communities, restorative gardens for pollinators, conserve water use and our environment; and reduce our carbon footprint by composting and planting native plants. Expert talks, informative displays, garden tour and hands-on demonstrations to understand how small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden and community. Register in advance for the garden tour!</p>
            </div>
        </div>
    )
}