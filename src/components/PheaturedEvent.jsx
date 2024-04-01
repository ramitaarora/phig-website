import { css } from '@emotion/css';

export default function PheaturedEvent() {
    return (
        <div id="pheatured-event">
            <div id="header" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./phig-website/images/homepage/earth-day-event.jpeg'); height: 500px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white;`}>
                <h2 className={css`position: relative; top: 300px;`}>Earth Day 2024 - Meet & Greet</h2>
                <p className={css`position: relative; top: 300px;`}>Hosted by Monika Olsen</p>
            </div>

            <div className={css`display: flex; justify-content: space-between; margin: 0 50px;`}>
                <div id="overlay-header" className={css`background-color: rgba(255, 255, 255, 0.95); position: relative; top: -50px; display: flex; width: 60%; text-align: center; padding: 20px; height: 100px; box-shadow: 2px 2px 2px lightgrey;`}>
                    <p className={css`border-right: 1px solid lightgrey;`}>Master Gardeners' Composting Workshop</p>
                    <p className={css`border-right: 1px solid lightgrey;`}>Hands-on Demonstrations</p>
                    <p>Limited Availability Garden Tour</p>
                </div>

                <div id="event-date" className={css`background-color: white; position: relative; top: -150px; width: 25%; padding: 30px; border: 1px solid lightgrey; border-radius: 10px;`}>
                    <div className={css`display: flex;`}>
                        <div>
                            <h2>22</h2>
                            <p>APR</p>
                        </div>
                        <div>
                            <h3>Monday April 22, 2024</h3>
                            <p>11:00 AM Pacific Time</p>
                        </div>
                    </div>

                    <p>A confirmation email with more details will be provided after registration.</p>
                    <button>Register with EventBrite</button>
                </div>
            </div>


            <div id="event-details" className={css`position: relative; top: -100px;`}>
                <p>This year is the 54rd anniversary of Earth Day. Small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden. </p>
                <p>PHIG & community partners share how we can better provide healthy communities, restorative gardens for pollinators, conserve water use and our environment; and reduce our carbon footprint by composting and planting native plants. Expert talks, informative displays, garden tour and hands-on demonstrations to understand how small efforts can make a difference to help the Earth, reduce our impact on climate change, and improve sustainable practices in your garden and community. Register in advance for the garden tour!</p>
            </div>
        </div>
    )
}