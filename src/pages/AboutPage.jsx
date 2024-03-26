import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const AboutPage = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('USA');
    const [text, setText] = useState('');

    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName])

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage([]);
        
        const testEmail = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email);
        const testPhone = (/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/i).test(phone);

        if (!testEmail) {
            setErrorMessage(pre => [...pre, "Please check your email and try again."]);
        }

        if (!testPhone) {
            setErrorMessage(pre => [...pre, "Please check your phone number and try again."]);
        }

        if (testEmail && testPhone) {

            let templateParams = {
                from_name: fullName,
                message: `\nName: ${fullName} \nEmail: ${email} \nPhone: ${phone} \nCountry of Residence: ${country} \nMessage: ${text}`,
            }

            emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then(
                (response) => {
                // console.log('SUCCESS!', response.status, response.text);
                navigate('/about/confirmation', { replace: true });
                setFirstName('');
                setLastName('');
                setFullName('');
                setEmail('');
                setPhone('');
                setText('');
                },
                (error) => {
                // console.log('FAILED...', error);
                setErrorMessage(pre => [...pre, "Error: Email not sent. Please contact us at phig@gmail.com."]);
                },
            );
        }
    }

    return (
        <div>
            <div>
                <h1>Who we are</h1>
                <h2>The History of Nature</h2>
                <p>To educate students, staff, and community members in the need for water conservation with a demonstration garden using no pesticides, water recycling methods, drought tolerant and native plantings.</p>
            </div>

            <div>
                <h3>September 2007</h3>
                <h4>PHIG Launched</h4>
                <p>Pleasant Hill's Volunteer Day marked a groundbreaking moment as Mt. Diablo Adult Education Gardening Program, led by teacher Monika Olsen, turned a water conservation demonstration garden into reality with an initial grant from the city.</p>
            </div>

            <div>
                <h3>??? 2008</h3>
                <h4>Planting Begins</h4>
                <p>The project involved soil preparation, mulching, and planting native and drought-tolerant species. Plant propagation included native meadow grasses. Eagle Scout Crosby Sperling built an information kiosk.</p>
                <p>Volunteers added paths and a dry streambed during Community Service Day and Chevron's Week of Caring in September. Ongoing work included path building and planting in prepared beds as the weather cooled.</p>
            </div>

            <div>
                <h3>??? 2009</h3>
                <h4>Major Milestones</h4>
                <p>Weeding, sheet-mulching, composting, and pruning continued in 2009, but a major accomplishment was bringing a micro spray and drip irrigation water conservation system to the garden with funding provided by several organizations in Pleasant Hill and Contra Costa County and labor supplied by many volunteer groups.</p>
            </div>

            <div>
                <h3>??? 2010</h3>
                <h4>Wildlife Housing</h4>
                <p>As a part of the requirements for the National Wildlife Federation's Habitat certification, PHIG volunteers provided food, water, shelter, and nesting areas for birds, bats, lizards, and insects in as many ways as possible. Bird shelters and houses, a bat house, and other shelters were designed, built, and installed in the garden.</p>
            </div>

            <div>
                <h1>The Garden Today</h1>
                <p>A former wasteland transformed into a thriving wildlife habitat and water-conserving garden through the collaborative efforts of volunteers, students, scouts, and community members in Pleasant Hill.</p>
                <p>Established in 2007 as a landscape design class project, the garden promotes sustainable practices, featuring drought-tolerant and native plants, and serves as a valuable learning resource.</p>
            </div>

            <div id="contact-form">
                <h1>Contact Form</h1>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first-name">First Name*  </label>
                        <input type="text" id="first-name" name="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name  </label>
                        <input type="text" id="last-name" name="last-name" value={lastName} onChange={e => setLastName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email*  </label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number*  </label>
                        <select id="country-code" name="country-code" required>
                            <option value="+1">+1 (USA)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (India)</option>
                        </select>
                        <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="country">Country of Residence  </label>
                        <select id="country" name="country" value={country} onChange={e => setCountry(e.target.value)} required>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message">Message  </label>
                        <textarea id="message" name="message" rows="4" cols="50" value={text} onChange={e => setText(e.target.value)} required></textarea>
                    </div>
                    <input type="submit" />
                </form>
                <div id="error-messages">
                    {errorMessage.length ? (
                        errorMessage.map((message, index) => 
                            <p key={index}>{message}</p>
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;