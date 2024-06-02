import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function HomepageCards() {
    return (
        <section id="homepage-cards" className={css`margin: 90px auto; width: 80%; display: flex; flex-wrap: wrap; justify-content: space-between; height: 100%;`}>
            <div id="each-homepage-card">
                <div className="homepage-card-image">
                    <img src="./images/homepage/card-1.jpeg" alt="our-projects"/>
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
                    <img src="./images/homepage/card-2.jpeg" alt="our-projects" title="Photo courtesy of Hunter Industries Incorporated."/>
                </div>
                <p className={css`margin-left: 5px; font-size: 10px;`}>Photo courtesy of Hunter Industries Incorporated.</p> 
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
                    <img src="./images/homepage/card-3.jpeg" alt="our-projects"/>
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
        </section>
    );
}