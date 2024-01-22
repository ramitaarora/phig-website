export default function VolunteerPage() {
    return (
        <div>
            <Navbar />

            <header>
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
            </header>

            <main>
                <section id="why-volunteer">
                    <div id="volunteer-left">
                        <h2>Why volunteer with us?</h2>
                        <p>Water Conservation: Contribute to water conservation efforts by learning and implementing eco-friendly watering techniques. Help spread awareness about responsible water usage in gardening.</p>
                        <p>Wildlife Protection: Create safe havens for local wildlife by incorporating wildlife-friendly elements into your garden. From pollinator-friendly plants to bird-friendly feeders, be a vital part of nurturing biodiversity.</p>
                        <p>Gardening Tips: Share your gardening expertise and tips with a global audience. Help beginners kickstart their green journey and guide seasoned gardeners toward more sustainable practices.</p>
                    </div>
                    <div id="volunteer-right">
                        <img src="./" alt="volunteers"/>
                    </div>
                </section>
                
                <section id="get-involved">
                    <h2>How to Get Involved:</h2>
                    <p>Ready to dig in? Select your favorite cause and let us know how you'd like to contribute. Whether you're a seasoned gardener, a nature enthusiast, or someone eager to make a positive impact, there's a place for you in our community.</p>
                    <p>Let's grow a sustainable future together! 🌍🌻</p>
                </section>
                
                <section id="search-opportunities">
                    <h2>Search for Opportunities</h2>
                    <form>
                        <input type="text"/>
                        <input type="submit"/>
                    </form>

                    <div id="results">
                        <form>
                        </form>
                        <div id="search-results">
                            <h3>Showing # Results</h3>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}