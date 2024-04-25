import ContactForm from "../components/ContactForm"
import WeatherStation from "./WeatherStation";
import { css } from '@emotion/css';

export default function ContactPage() {
    return (
        <div>
            <header className={css`text-align: center; height: 100px; padding: 50px;`}>
                <h1>Contact Us</h1>
            </header>
            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; padding: 50px;`}>
                <div id="directions">
                    <h2>Directions to the garden</h2>
                    <p>From Hwy 680</p>
                    <ul>
                        <li>Exit Treat Blvd</li>
                        <li>Follow signs to Oak Park Blvd</li>
                        <li>Proceed about 1/2 mi</li>
                        <li>Turn right on Patterson Blvd.</li>
                        <li>Turn right on Hawthorne Drive</li>
                        <li>PHIG is beyond the parking lot, on the left side, at the northwest corner</li>
                        <li>Pleasant Oaks Park is on the right side</li>
                    </ul>
                    <p>PHIG is also available from Pleasant Hill BART and bus.</p>
                </div>
                <ContactForm />
            
            </main>
            
            <iframe className={css`border: none;`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.6651644328053!2d-122.07075562449964!3d37.93825207194467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561423f4a8d93%3A0xcae1de5ca389745d!2sPleasant%20Hill%20Instructional%20Garden!5e0!3m2!1sen!2sus!4v1713025721627!5m2!1sen!2sus" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <WeatherStation />
        </div>
    )
}