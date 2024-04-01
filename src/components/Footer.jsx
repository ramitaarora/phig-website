import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={css`background-color: #081821; color: white; padding: 50px; line-height: 40px;`}>
            <div id="footer-links" className={css`display: flex; justify-content: space-evenly; margin: 30px;`}>

                <div id="about-nav">
                    <h2>About PHIG</h2>
                    <ul>
                        <Link to="/phig-website/about" className={css`text-decoration: none; color: white;`}><li>About Us</li></Link>
                        <Link to="/phig-website/about" className={css`text-decoration: none; color: white;`}><li>History</li></Link>
                        <Link to="/phig-website/about#contact-form" className={css`text-decoration: none; color: white;`}><li>Contact</li></Link>
                    </ul>
                </div>

                <div id="get-involved">
                    <h2>Get Involved</h2>
                    <ul>
                        <Link to="/phig-website/volunteer" className={css`text-decoration: none; color: white;`}><li>Ways to Help</li></Link>
                        <Link to="/phig-website/donate" className={css`text-decoration: none; color: white;`}><li>Donate</li></Link>
                        <Link to="/phig-website/volunteer" className={css`text-decoration: none; color: white;`}><li>Volunteer</li></Link>
                    </ul>
                </div>

                <div id="footer-social">
                    <h2>Social Media</h2>
                    <div className={css`display: flex; align-items: center; justify-content: space-evenly;`}>
                        <a href="https://www.facebook.com/Pleasant-Hill-Instructional-Garden-PHIG-115550191840821/" target="_blank"><img src="/images/footer/facebook.svg" alt="facebook"/></a>
                        <a href="mailto:phigarden@gmail.com" target="_blank"><img src="/phig-website/images/footer/envelope.svg" alt="email"/></a>
                        <a href="https://www.instagram.com/phill_garden/" target="_blank"><img src="/images/footer/instagram.svg" alt="instagram"/></a>
                        <a href="https://twitter.com/PHGarden" target="_blank"><img src="/phig-website/images/footer/twitter-x.svg" alt="twitter"/></a>
                        <a href="https://www.facebook.com/Pleasant-Hill-Instructional-Garden-PHIG-115550191840821/" target="_blank"><img src="/phig-website/images/footer/facebook.svg" alt="facebook"/></a>
                        <a href="mailto:phigarden@gmail.com"><img src="/phig-website/images/footer/envelope.svg" alt="email"/></a>
                        <a href="https://www.instagram.com/phill_garden/" target="_blank"><img src="/phig-website/images/footer/instagram.svg" alt="instagram"/></a>
                        <a href="https://twitter.com/PHGarden" target="_blank"><img src="/phig-website/images/footer/twitter-x.svg" alt="twitter"/></a>
                    </div>
                </div>
            </div>
            <div id="copyright" className={css`text-align: center; margin-top: 100px;`}>
                <p>PHIG (Pleasant Hill Instructional Garden) P.O.Box 23454, Pleasant Hill, CA 94523</p>
                <p>925-482-6670</p>
                <p>Tax-exempt 501 (c)(3)</p>
                <p>Pictures courtesy of Monika Olsen</p>
                <p>© Pleasant Hill Instructional Garden 2024</p>
            </div>
        </footer>
    );
}