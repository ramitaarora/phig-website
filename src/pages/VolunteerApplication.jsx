import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { Link, useNavigate } from 'react-router-dom';
import volunteerOpps from '../data/volunteerOpps.json';

import emailjs from '@emailjs/browser';

export default function VolunteerApplication() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [preferredContact, setPreferredContact] = useState('');
    const [age, setAge] = useState('');
    const [time, setTime] = useState('');
    const [project, setProject] = useState('');
    const [errorMessage, setErrorMessage] = useState([])

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

        if (age > 100 || age < 1) {
            setErrorMessage(pre => [...pre, "Please check your age and try again."])
        }

        if (testEmail && testPhone && age < 100 && age > 1) {
            let templateParams = {
                from_name: name,
                phone_number: phone,
                preferred_contact_method: preferredContact,
                age: age,
                time: time,
                project_interested_in: project,
                reply_to: email
            }

            navigate('/volunteer/confirmation', { replace: true });

            emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then(
                (response) => {
                // console.log('SUCCESS!', response.status, response.text);
                navigate('/volunteer/confirmation', { replace: true });
                setName('');
                setEmail('');
                setPhone('');
                setPreferredContact('');
                setAge('');
                setTime('');
                setProject('');
                },
                (error) => {
                // console.log('FAILED...', error);
                setErrorMessage(pre => [...pre, "Error: Email not sent. Please contact us at PHinstructionalgarden@gmail.com."]);
                },
            );
        }
    }

    return (
        <div id="volunteer-app" className={css`margin: 50px auto; width: 500px;`}>
            <header className={css`text-align: center;`}>
                <h1>Volunteer Application</h1>
                <p className={css`margin-top: 15px;`}>We sincerely appreciate you taking the time to fill out this form and for volunteering. It means a lot to us!</p>
            </header>
            <form onSubmit={handleSubmit} className={css` margin: 20px auto; display: flex; flex-direction: column; line-height: 40px;`}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" value={name} onChange={event => setName(event.target.value)} className='form-input' required/>

                <label>How should we contact you?</label>
                <div className={css`display: flex; justify-content: space-around; align-items: center;`}>
                    <div className='application-radio'>
                        <input type="radio" id="phone" name="contact" value="Phone" onClick={event => setPreferredContact(event.target.value)}/>
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className='application-radio'>
                        <input type="radio" id="email" name="contact" value="Email" onClick={event => setPreferredContact(event.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Email Address" value={email} onChange={event => setEmail(event.target.value)} className='form-input' required/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)} className='form-input' required/>

                <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" placeholder="Age" value={age} className='form-input' onChange={event => setAge(event.target.value)} required/>
                    </div>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="availability">When are you open?</label>
                        <input type="time" id="availability" value={time} onChange={event => setTime(event.target.value)} className='form-input'  required/>
                    </div>
                </div>

                <label htmlFor="project">I am available for these projects:</label>
                <select id="project" value={project} onChange={event => setProject(event.target.value)} className='form-input' required>
                    <option>Please Select</option>
                    {volunteerOpps.map((opp, index) =>
                        <option key={index}>{opp.title}</option>
                    )}
                </select>

                <input type="submit" className='green-button' style={{ marginTop: '30px' }}/>
                <div id="error-messages">
                    {errorMessage.length ? (
                        errorMessage.map((message, index) => 
                            <p key={index}>{message}</p>
                        )
                    ) : null}
                </div>

                <Link to="/volunteer#search-opportunities" className={css`text-align: center;`}>Previous</Link>
            </form>
        </div>
    );
}