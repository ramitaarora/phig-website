import { css } from '@emotion/css'

export default function Footer() {
    return (
        <footer className={css`background-color: #081821; color: white; padding: 50px; line-height: 40px;`}>
            <div id="footer-links" className={css`display: flex; justify-content: space-evenly; margin: 30px;`}>

                <div id="about-nav">
                    <h2>About PHIG</h2>
                    <ul>
                        <li>About Us</li>
                        <li>History</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div id="get-involved">
                    <h2>Get Involved</h2>
                    <ul>
                        <li>Ways to Help</li>
                        <li>Donate</li>
                        <li>Volunteer</li>
                    </ul>
                </div>

                <div id="footer-social">
                    <h2>Social Media</h2>
                    <div className={css`display: flex; align-items: center; justify-content: space-evenly;`}>
                        <img src="./images/facebook.svg" alt="facebook"/>
                        <img src="./images/envelope.svg" alt="facebook"/>
                    </div>
                </div>
            </div>
            <div id="copyright" className={css`text-align: center; margin-top: 100px;`}>
                <p>PHIG (Pleasant Hill Instructional Garden) P.O.Box 23454, Pleasant Hill, CA 94523</p>
                <p>925-482-6670</p>
                <p>Tax-exempt 501 (c)(3)</p>
                <p>Pictures courtesy of Monika Olsen</p>
                <p>© Pleasant Hill Instructional Garden 2021</p>
            </div>
        </footer>
    );
}