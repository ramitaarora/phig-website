import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { css } from '@emotion/css';

export default function ContactPageForm() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // const [country, setCountry] = useState('');
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
                message: `\nName: ${fullName} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${text}`,
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
                        setErrorMessage(pre => [...pre, "Error: Email not sent. Please contact us at PHinstructionalgarden@gmail.com"]);
                    },
                );
        }
    }
    return (
        <div id="contact-form" className="contact-page-form">
            <h2>Get in Touch</h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <input className='form-input' type="text" id="first-name" name="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
                <input className='form-input' type="text" id="last-name" name="last-name" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
                <input className='form-input contact-form-input' type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />

                <div className={css`width: 100%;`}>
                    <input className='form-input contact-form-input' type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" required />
                    <p className={css`font-size: 10px; color: grey;`}>*Only used if email is unreachable</p>
                </div>

                <textarea className='form-input' id="message" name="message" rows="4" cols="80" value={text} onChange={e => setText(e.target.value)} placeholder="Message" required></textarea>

                <input type="submit" className="dark-button" />
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