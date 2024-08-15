import { css } from '@emotion/css';

export default function PheaturedEvent() {
    // Change featured event image according to file type
    const pheaturedEventData = {
        name: 'Community Service Day 2024',
        subtitle: 'Hosted by Pleasant Hill Instructional Garden',
        image: './images/homepage/pheatured-event.jpg',
        subtext_one: "Cleaned up neighborhoods, schools, parks, and creeks",
        subtext_two: "Landscaped parks and organic gardens",
        subtext_three: "Repaired over 1,000 bicycles for donation to children",
        event_date: "21",
        event_month: "SEPT",
        event_fullDate: "Saturday September 21, 2024",
        event_time: "9:00 AM - 12:00 PM",
        link: "https://www.pleasanthillca.gov/514/Community-Service-Day",
        flyer: "./downloads/EarthDay_2024_flyer.pdf",
        description_one: "The City of Pleasant Hill is looking for neighborhood projects for this year's 20th Annual Community Service Day. If you have a project you would like to lead, please fill out the online form so that it can be added to the project list. As this is our 20th annual, we would like to find as many different projects as possible to give volunteers a wide selection of choices.",
        description_two: "Launched in 2005 by Mayor Michael Harris and coordinated by the Civic Action Commission, CSD is a day where members of the community of all ages come together to volunteer their time for a variety of worthy causes and projects."
    };
    
    return (
        <div id="pheatured-event">
            <div id="pheatured-event-header" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url(${pheaturedEventData.image}); height: 500px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white`}>
                <h2>{pheaturedEventData.name}</h2>
                <p>{pheaturedEventData.subtitle}</p>
            </div>

            <div className={css`display: flex; justify-content: space-between; margin: 0 80px; @media (max-width: 800px) { flex-direction: column; }`}>
                <div id="overlay-header" className={css`background-color: rgba(255, 255, 255, 0.95); position: relative; top: -50px; display: flex; justify-content: center; align-items: center; width: 60%; text-align: center; padding: 20px; height: 100px; box-shadow: 2px 2px 2px lightgrey; width: 60%; @media (max-width: 800px) { width: 100%; } @media (max-width: 550px) { display: none; }`}>
                    <p className={css`border-right: 1px solid lightgrey; color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>{pheaturedEventData.subtext_one}</p>
                    <p className={css`border-right: 1px solid lightgrey; color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>{pheaturedEventData.subtext_two}</p>
                    <p className={css`color: #97C159; font-size: 16px; padding: 10px; font-weight: bold;`}>{pheaturedEventData.subtext_three}</p>
                </div>

                <div id="event-date" className={css`background-color: white; position: relative; top: -150px; width: 35%; padding: 30px; border: 1px solid lightgrey; border-radius: 10px; box-shadow: 0px 0px 20px grey; display: flex; flex-direction: column; justify-content: space-evenly; @media (max-width: 800px) { display: none; }`}>

                    <div className={css`display: flex; margin-bottom: 10px; align-items: center;`}>
                        <div className={css`margin-right: 20px; border: 2px solid lightgrey; padding: 20px; border-radius: 15px; text-align: center; height: fit-content;`}>
                            <h2>{pheaturedEventData.event_date}</h2>
                            <p>{pheaturedEventData.event_month}</p>
                        </div>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-between;`}>
                            <h2>{pheaturedEventData.event_fullDate}</h2>
                            <div>
                                <p className={css`color: grey; font-size: 14px;`}>{pheaturedEventData.event_time}</p>
                                <p className={css`color: grey; font-size: 14px;`}>Pacific Time</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ color: 'lightgrey', display: 'flex', margin: '10px' }}></hr>

                    <div className={css`text-align: center;`}>
                        <p style={{ color: 'grey', fontSize: 'small' }}>A <span style={{ color: 'black', fontSize: 'small' }}>confirmation email</span> with more details will be provided after registration.</p>
                        <a href={pheaturedEventData.link} target="_blank" rel="noreferrer">
                            <button className="event-button">
                                Register
                            </button>
                        </a>
                        <a href={pheaturedEventData.flyer} download>
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
                            <h2>{pheaturedEventData.event_date}</h2>
                            <p>{pheaturedEventData.event_month}</p>
                        </div>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-between;`}>
                            <h2>{pheaturedEventData.event_fullDate}</h2>
                            <div>
                                <p className={css`color: grey; font-size: 14px;`}>{pheaturedEventData.time}</p>
                                <p className={css`color: grey; font-size: 14px;`}>Pacific Time</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ color: 'lightgrey', display: 'flex', margin: '10px' }}></hr>

                    <div className={css`text-align: center;`}>
                        <p style={{ color: 'grey', fontSize: 'small' }}>A <span style={{ color: 'black', fontSize: 'small' }}>confirmation email</span> with more details will be provided after registration.</p>
                        <a href={pheaturedEventData.link} target="_blank" rel="noreferrer">
                            <button className="event-button">
                                Register
                            </button>
                        </a>
                        <a href={pheaturedEventData.flyer} download>
                            <button className="event-button">
                                Download Flyer
                            </button>
                        </a>
                    </div>

                </div>
                <div id="event-details" className={css`position: relative; top: -100px; margin: 80px; line-height: 35px; @media (max-width: 800px) { font-size: 16px; margin: 20px; width: 100%; margin: 0; top: 100px; } `}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '-80px' }}>Details</h3>
                    {/* <button>Garden History</button> */}
                    <p>{pheaturedEventData.description_one}</p>
                    <p className={css`margin-top: 30px;`}>{pheaturedEventData.description_two}</p>
                </div>

            </div>
        </div>
    )
}