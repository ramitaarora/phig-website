import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { css } from '@emotion/css';

export default function ContactForm() {
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
                        setCountry('');
                        setText('');
                    },
                    (error) => {
                        // console.log('FAILED...', error);
                        setErrorMessage(pre => [...pre, "Error: Email not sent. Please contact us at PHinstructionalgarden@gmail.com"]);
                    },
                );
        }
    }
    return (
        <div id="contact-form" className="about-page-contact">
            <h2 className={css`text-align: center;`}>How Can We Help?</h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <div className={css`width: 100%; display: flex; justify-content: space-between; align-items: center;`}>
                    <div className={css`display: flex; flex-direction: column; align-items: flex-start; width: 100%; margin-right: 10px;`}>
                        <label htmlFor="first-name">First Name<span>*</span></label>
                        <input className="about-page-form-input contact-form-input" type="text" id="first-name" name="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
                    </div>
                    <div className={css`display: flex; flex-direction: column; align-items: flex-start; width: 100%; margin-left: 10px;`}>
                        <label htmlFor="last-name">Last Name<span>*</span></label>
                        <input className="about-page-form-input contact-form-input" type="text" id="last-name" name="last-name" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="First Name" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email<span>*</span></label>
                    <input className="about-page-form-input contact-form-input" type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                </div>

                <div className={css`display: flex; flex-direction: column; align-items: flex-start;`}>
                <label htmlFor="phone">Phone Number<span>*</span></label>
                <div className={css`display: flex; width: 100%;`}>
                    <select className="about-page-form-input" id="country-code" name="country-code" required>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (India)</option>
                    </select>
                    <input className="about-page-form-input contact-form-input" type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" required />
                </div>
                </div>

                
                <div>
                    <label htmlFor="country">Country of Residence</label>
                    <select className="about-page-form-input contact-form-input" id="country" name="country" value={country} onChange={e => setCountry(e.target.value)} required>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div className={css`display: flex; flex-direction: column; align-items: flex-start;`}>
                    <label htmlFor="message">Message<span>*</span></label>
                    <textarea contact-form-input className="about-page-form-input contact-form-input" id="message" name="message" rows="4" cols="50" value={text} onChange={e => setText(e.target.value)} placeholder="Message" required></textarea>
                </div>
                <input type="submit" className="green-button" />
            </form>
            <div id="error-messages">
                {errorMessage.length ? (
                    errorMessage.map((message, index) =>
                        <p key={index}>{message}</p>
                    )
                ) : null}
            </div>
        </div>
    )
}