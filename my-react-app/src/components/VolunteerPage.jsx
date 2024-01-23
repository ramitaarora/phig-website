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
        image: './'
    },
    {
        title: "UX/UI Designer",
        time: "We'll work with your schedule",
        description: "Design and update our website to reflect what we do and attract more visitors.",
        status: "COMPLETED",
        place: "Remote",
        location: "California",
        image: './'
    }
]

export default function VolunteerPage() {
    return (
        <div>
            <Navbar />

            {/*<header>
                <div className='home-banner-container'>
                    <div className='hero-image'>
                        <div className='home-text-section'>
                            <h1 className='primary-heading'>Living Landscapes</h1>
                            <p className='primary-text'>A California Habitats Garden that protects and conserves vegetation & wildlife critical to our planet.</p>
                            <button className='secondary-button'>
                                Our Impact
                            </button>
                        </div>
                    </div>
                </div>
            </header> */}

            <main>
                <section id="why-volunteer" className={css`display: flex; justify-content: space-evenly; height: 400px; margin: 100px 100px;
                `}>
                    <div id="volunteer-left" className={css`display: flex; flex-direction: column; justify-content: space-evenly; padding: 0 50px;
                    `}>
                        <h2>Why volunteer with us?</h2>
                        <p><b>Water Conservation:</b> Contribute to water conservation efforts by learning and implementing eco-friendly watering techniques. Help spread awareness about responsible water usage in gardening.</p>
                        <p><b>Wildlife Protection:</b> Create safe havens for local wildlife by incorporating wildlife-friendly elements into your garden. From pollinator-friendly plants to bird-friendly feeders, be a vital part of nurturing biodiversity.</p>
                        <p><b>Gardening Tips:</b> Share your gardening expertise and tips with a global audience. Help beginners kickstart their green journey and guide seasoned gardeners toward more sustainable practices.</p>
                    </div>
                    <div id="volunteer-right">
                        <img src="./images/volunteers.png" alt="volunteers" />
                    </div>
                </section>

                <section id="get-involved" className={css`background-color: darkgreen; color: white; padding: 50px; display: flex; flex-direction: column; justify-content: space-between; height: 250px;
                `}>
                    <h2>How to Get Involved:</h2>
                    <p>Ready to dig in? Select your favorite cause and let us know how you'd like to contribute. Whether you're a seasoned gardener, a nature enthusiast, or someone eager to make a positive impact, there's a place for you in our community.</p>
                    <p>Let's grow a sustainable future together! 🌍🌻</p>
                </section>

                <section id="search-opportunities" className={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 50px auto;
                `}>
                    <h2>Search for Opportunities</h2>
                    <form className={css`
                        display: flex;
                        justify-content: space-evenly;
                        margin: 30px auto;
                    `}>
                        <input type="text" />
                        <input type="submit" />
                    </form>

                    <div id="results" className={css`
                        display: flex;
                        justify-content: space-evenly;
                        margin: 30px auto;
                    `}>
                        <form>
                            <div id="work-format">
                                <h3>Work Format</h3>
                                <div>
                                    <input type="checkbox" name="remote-work" />
                                    <label htmlFor='remote-work'>Remote Work</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="inperson-work" />
                                    <label htmlFor='inperson-work'>In-Person Work</label>
                                </div>
                            </div>

                            <div id="activity-type">
                                <h3>Volunteer Activity Type</h3>
                                <div>
                                    <input type="checkbox" name="ui-ux" />
                                    <label htmlFor='ui-ux'>UI/UX Designer</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="composter" />
                                    <label htmlFor='composter'>Composter</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="work-participant" />
                                    <label htmlFor='work-participant'>Work Party Participant</label>
                                </div>
                            </div>

                            <input type="submit" />
                            <input type="reset" />
                        </form>

                        <div id="search-results">
                            <h3>Showing # Results</h3>
                            <div id="results-container">

                                {exampleResults.map(result =>
                                    <SearchResult result={result} />
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}