import { useState } from 'react';
import { css } from '@emotion/css';
import { Link, useNavigate } from 'react-router-dom';
import volunteerOpps from '../data/volunteerOpps.json';

import emailjs from '@emailjs/browser';

export default function VolunteerApplication() {
    const navigate = useNavigate()
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
            console.log(templateParams);

            emailjs.send('service_s5i9a9x', 'template_yvx6i8y', templateParams, 'N1SNnkrtd7PFG6MOL')
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
                alert('Error: Email not sent!');
                },
            );
        }
        


    }

    return (
        <div id="volunteer-app" className={css`margin: 50px auto; width: 500px;`}>
            <header className={css`text-align: center;`}>
                <h1>Volunteer Application</h1>
                <p>We sincerely appreciate you taking the time to fill out this form and for volunteering. It means a lot to us!</p>
            </header>
            <form onSubmit={handleSubmit} className={css` margin: 20px auto; display: flex; flex-direction: column;`}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" value={name} onChange={event => setName(event.target.value)} required/>

                <p>How should we contact you?</p>
                <div className={css`display: flex; justify-content: space-around; align-items: center;`}>
                    <div>
                        <input type="radio" id="phone" name="contact" value="Phone" onClick={event => setPreferredContact(event.target.value)}/>
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div>
                        <input type="radio" id="email" name="contact" value="Email" onClick={event => setPreferredContact(event.target.value)}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Email Address" value={email} onChange={event => setEmail(event.target.value)} required/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)} required/>

                <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" placeholder="Age" value={age} onChange={event => setAge(event.target.value)} required/>
                    </div>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="availability">When are you open?</label>
                        <input type="time" id="availability" value={time} onChange={event => setTime(event.target.value)} required/>
                    </div>
                </div>

                <label htmlFor="project">I am available for these projects:</label>
                <select id="project" value={project} onChange={event => setProject(event.target.value)} required>
                    <option></option>
                    {volunteerOpps.map((opp, index) =>
                        <option key={index}>{opp.title}</option>
                    )}
                </select>

                <input type="submit" />
                <div id="error-messages">
                    {errorMessage.length ? (
                        errorMessage.map((message, index) => 
                            <p key={index}>{message}</p>
                        )
                    ) : null}
                </div>

                <Link to="/volunteer#search-opportunities">Previous</Link>
            </form>
        </div>
    );
}