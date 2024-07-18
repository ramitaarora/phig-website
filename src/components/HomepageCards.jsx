import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomepageCards() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1100 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1100, min: 780 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section id="homepage-cards" className={css`width: 100%;`}>
            
            <div id="homepage-cards-mobile" className={css`width: 90%; margin: 20px auto;`}>
                <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} dotListClass="custom-dot-list-style">
                    <div id="each-homepage-card">
                        <div className="homepage-card-image">
                            <img src="./images/homepage/card-1.jpeg" alt="Planting CA ceanothus" title="Planting CA ceanothus" loading="lazy" />
                        </div>
                        <div className="homepage-card-text">
                            <h3>Our Projects</h3>
                            <p>Energized by our ongoing conservation projects and a diverse coalition of local group endeavors, our projects in California drive a powerful impact for wildlife ecosystems as well as fauna conservation.</p>
                        </div>
                        <div className="homepage-card-learn-more">
                            <Link to="/volunteer"><p>Learn More</p></Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34773A" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </div>
                    </div>

                    <div id="each-homepage-card">
                        <div className="homepage-card-image">
                            <img src="./images/homepage/card-2.jpeg" alt="Low-flow sprinkler head" title="Photo courtesy of Hunter Industries Incorporated." loading="lazy" />
                        </div>
                        <p className={css`text-align: center; font-size: 10px;`}>Photo courtesy of Hunter Industries Incorporated.</p>
                        <div className="homepage-card-text">
                            <h3>Our Mission</h3>
                            <p>We educate students, staff, and community members in the need for water conservation using a demonstration garden. Our goal is to avoid pesticides, encourage water recycling methods, and teach drought tolerant and native plantings.</p>
                        </div>
                        <div className="homepage-card-learn-more">
                            <Link to="/approach"><p>Learn More</p></Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34773A" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </div>
                    </div>

                    <div id="each-homepage-card">
                        <div className="homepage-card-image">
                            <img src="./images/homepage/card-3.jpeg" alt="Planting native grasses" title="Planting native grasses" loading="lazy" />
                        </div>
                        <div className="homepage-card-text">
                            <h3>Work Parties</h3>
                            <p>There are plenty of opportunities to lend a hand. PHIG has a number of scheduled work party dates and we also would be happy to set up additional project work days for small groups wishing to take on longer-term tasks or projects. Come by and take a look & help. Bring friends too!</p>
                        </div>
                        <div className="homepage-card-learn-more">
                            <Link to="/events"><p>Learn More</p></Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34773A" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}