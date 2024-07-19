import { css } from '@emotion/css';

export default function PheaturedEvent() {
    return (
        <div id="pheatured-event">
            <div id="pheatured-event-header" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./images/homepage/earth-day-event.jpeg'); height: 500px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white`}>
                <h2>Earth Day 2024</h2>
                <p>Hosted by Pleasant Hill Instructional Garden</p>
            </div>

            <div className={css`display: flex; justify-content: space-between; margin: 0 80px; @media (max-width: 800px) { flex-direction: column; }`}>
                <div id="overlay-header" className={css`background-color: rgba(255, 255, 255, 0.95); position: relative; top: -50px; display: flex; justify-content: center; align-items: center; width: 60%; text-align: center; padding: 20px; height: 100px; box-shadow: 2px 2px 2px lightgrey; width: 60%; @media (max-width: 800px) { width: 100%; } @media (max-width: 550px) { display: none; }`}>
                    <p className={css`border-right: 1px solid lightgrey; color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>Master Gardeners' Composting Workshop</p>
                    <p className={css`border-right: 1px solid lightgrey; color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>Hands-on Demonstrations</p>
                    <p className={css`color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>Limited Availability Garden Tour</p>
                </div>

                <div id="event-date" className={css`background-color: white; position: relative; top: -150px; width: 35%; padding: 30px; border: 1px solid lightgrey; border-radius: 10px; box-shadow: 0px 0px 20px grey; display: flex; flex-direction: column; justify-content: space-evenly; @media (max-width: 800px) { display: none; }`}>

                    <div className={css`display: flex; margin-bottom: 10px; align-items: center;`}>
                        <div className={css`margin-right: 20px; border: 2px solid lightgrey; padding: 20px; border-radius: 15px; text-align: center; height: fit-content;`}>
                            <h2>28</h2>
                            <p>APR</p>
                        </div>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-between;`}>
                            <h2>Sunday April 28, 2024</h2>
                            <div>
                                <p className={css`color: grey; font-size: 14px;`}>12:30 PM - 4:30 PM</p>
                                <p className={css`color: grey; font-size: 14px;`}>Pacific Time</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ color: 'lightgrey', display: 'flex', margin: '10px' }}></hr>

                    <div className={css`text-align: center;`}>
                        <p style={{ color: 'grey', fontSize: 'small' }}>A <span style={{ color: 'black', fontSize: 'small' }}>confirmation email</span> with more details will be provided after registration.</p>
                        <a href="https://www.eventbrite.com/e/earth-day-2024-free-fun-family-friendly-educational-tickets-833927518657?aff=oddtdtcreator" target="_blank" rel="noreferrer">
                            <button className="event-button">
                                Register with EventBrite
                            </button>
                        </a>
                        <a href="./downloads/EarthDay_2024_flyer.pdf" download>
                            <button className="event-button">
                                Download Flyer
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            <div className={css`@media (max-width: 800px) { padding: 5%; width: 100%; margin: 0 auto; }`}>

                <div id="event-date" className={css`background-color: white; padding: 30px; border: 1px solid lightgrey; border-radius: 10px; box-shadow: 0px 0px 20px grey; display: flex; justify-content: space-evenly; @media (min-width: 800px) { display: none; width: 100%; } @media (max-width: 550px) { flex-direction: column; }`}>

                    <div className={css`display: flex; margin-bottom: 10px; align-items: center;`}>
                        <div className={css`margin-right: 20px; border: 2px solid lightgrey; padding: 20px; border-radius: 15px; text-align: center; height: fit-content;`}>
                            <h2>28</h2>
                            <p>APR</p>
                        </div>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-between;`}>
                            <h2>Sunday April 28, 2024</h2>
                            <div>
                                <p className={css`color: grey; font-size: 14px;`}>12:30 PM - 4:30 PM</p>
                                <p className={css`color: grey; font-size: 14px;`}>Pacific Time</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ color: 'lightgrey', display: 'flex', margin: '10px' }}></hr>

                    <div className={css`text-align: center;`}>
                        <p style={{ color: 'grey', fontSize: 'small' }}>A <span style={{ color: 'black', fontSize: 'small' }}>confirmation email</span> with more details will be provided after registration.</p>
                        <a href="https://www.eventbrite.com/e/earth-day-2024-free-fun-family-friendly-educational-tickets-833927518657?aff=oddtdtcreator" target="_blank" rel="noreferrer">
                            <button className="event-button">
                                Register with EventBrite
                            </button>
                        </a>
                        <a href="./downloads/EarthDay_2024_flyer.pdf" download>
                            <button className="event-button">
                                Download Flyer
                            </button>
                        </a>
                    </div>

                </div>
                <div id="event-details" className={css`position: relative; top: -100px; margin: 80px; line-height: 35px; @media (max-width: 800px) { font-size: 16px; margin: 20px; width: 100%; margin: 0; top: 100px; } `}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '-80px' }}>Details</h3>
                    {/* <button>Garden History</button> */}
                    <p>This year is the 54rd anniversary of Earth Day. Small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden. </p>
                    <p>PHIG & community partners share how we can better provide healthy communities, restorative gardens for pollinators, conserve water use and our environment; and reduce our carbon footprint by composting and planting native plants. Expert talks, informative displays, garden tour and hands-on demonstrations to understand how small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden and community. Register in advance for the garden tour!</p>
                </div>

            </div>
        </div>
    )
}