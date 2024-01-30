import { css } from '@emotion/css'
import Navbar from './Navbar';
import SearchResult from './SearchResult';

const exampleResults = [
    {
        title: "Pruner",
        time: "8:00 AM - 5:00PM",
        description: "Please join us when several volunteer activities are taking place: composting, pruning, weeding, planting, creating seasonal wildlife habitat and improving our beds.",
        status: "ONGOING",
        place: "In-Person",
        location: "California",
        image: './images/volunteer-sample-1.png'
    },
    {
        title: "UX/UI Designer",
        time: "We'll work with your schedule",
        description: "Design and update our website to reflect what we do and attract more visitors.",
        status: "COMPLETED",
        place: "Remote",
        location: "California",
        image: './images/volunteer-sample-2.png'
    }
]

export default function VolunteerPage() {
    return (
        <div>
            <Navbar />

            <header>
                <div id="header-image" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('./images/forest-banner.png'); height: 400px; width: 100vw; background-position: center; background-repeat: no-repeat; background-size: cover;`}>
                    <div id="header-text" className={css`text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; color: white; height: 300px; width: 100vw;`}>
                        <h1>Join Us!</h1>
                        <h2>🌱 Animals need nature, and we need each other 🌿</h2>
                        <p>To protect the future of the world’s ecosystems, we need everyone on board — from governments, to business owners, environmental activists, corporations, and citizens around the world!</p>
                    </div>
                </div>
            </header>

            <main>
                <section id="why-volunteer" className={css`display: flex; justify-content: space-evenly; height: 400px; margin: 100px 100px;`}>
                    <div id="volunteer-left" className={css`display: flex; flex-direction: column; justify-content: space-evenly; padding: 0 50px;`}>
                        <h2>Why volunteer with us?</h2>
                        <p><b>Water Conservation:</b> Contribute to water conservation efforts by learning and implementing eco-friendly watering techniques. Help spread awareness about responsible water usage in gardening.</p>
                        <p><b>Wildlife Protection:</b> Create safe havens for local wildlife by incorporating wildlife-friendly elements into your garden. From pollinator-friendly plants to bird-friendly feeders, be a vital part of nurturing biodiversity.</p>
                        <p><b>Gardening Tips:</b> Share your gardening expertise and tips with a global audience. Help beginners kickstart their green journey and guide seasoned gardeners toward more sustainable practices.</p>
                    </div>
                    <div id="volunteer-right" className={css`height: 100%; object-fit: cover; object-position: center; overflow: hidden;`}>
                        <img src="./images/volunteers.png" alt="volunteers" />
                    </div>
                </section>

                <section id="get-involved" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('./images/forest-banner.png'); color: white; padding: 50px; display: flex; flex-direction: column; justify-content: space-between; height: 250px; background-position: center; background-repeat: no-repeat; background-size: cover;`}>
                    <h2>How to Get Involved:</h2>
                    <p>Ready to dig in? Select your favorite cause and let us know how you'd like to contribute. Whether you're a seasoned gardener, a nature enthusiast, or someone eager to make a positive impact, there's a place for you in our community.</p>
                    <p>Let's grow a sustainable future together! 🌍🌻</p>
                </section>

                <section id="search-opportunities" className={css`display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 50px auto;`}>
                    <h2>Search for Opportunities</h2>
                    <form className={css`display: flex; justify-content: space-evenly; margin: 30px auto;`}>
                        <input type="text" />
                        <input type="submit" />
                    </form>

                    <div id="results" className={css`display: flex; justify-content: space-evenly; margin: 30px auto;`}>
                        <form className={css`margin: 0 50px 0 0;`}>
                            <div id="work-format">
                                <h3 className={css`border-bottom: 1px solid lightgrey; margin: 20px 0; padding: 10px 0;`}>Work Format</h3>
                                <div className={css`margin: 10px 0;`}>
                                    <input type="checkbox" name="remote-work" className={css`margin: 0 10px;`}/>
                                    <label htmlFor='remote-work'>Remote Work</label>
                                </div>
                                <div className={css`margin: 10px 0;`}>
                                    <input type="checkbox" name="inperson-work" className={css`margin: 0 10px;`}/>
                                    <label htmlFor='inperson-work'>In-Person Work</label>
                                </div>
                            </div>

                            <div id="activity-type">
                                <h3 className={css`border-bottom: 1px solid lightgrey; margin: 20px 0; padding: 10px 0;`}>Volunteer Activity Type</h3>
                                <div className={css`margin: 10px 0;`}>
                                    <input type="checkbox" name="ui-ux" className={css`margin: 0 10px;`}/>
                                    <label htmlFor='ui-ux'>UI/UX Designer</label>
                                </div>
                                <div className={css`margin: 10px 0;`}>
                                    <input type="checkbox" name="composter" className={css`margin: 0 10px;`}/>
                                    <label htmlFor='composter'>Composter</label>
                                </div>
                                <div className={css`margin: 10px 0;`}>
                                    <input type="checkbox" name="work-participant" className={css`margin: 0 10px;`}/>
                                    <label htmlFor='work-participant'>Work Party Participant</label>
                                </div>
                            </div>

                            <input type="reset" value="Clear Filters" className={css`margin-top: 20px; background-color: #081821; color: white; padding: 8px; border: 1px solid #081821; border-radius: 10px; cursor: pointer;`}/>
                        </form>

                        <div id="search-results">
                            <h3>Showing # Results</h3>
                            <div id="results-container">

                                {exampleResults.map((result, index) =>
                                    <div key={index}>
                                        <SearchResult result={result} index={index}/>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}