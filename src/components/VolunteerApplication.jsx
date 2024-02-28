import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function VolunteerApplication() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div id="volunteer-app" className={css`margin: 50px auto; width: 500px;`}>
            <header className={css`text-align: center;`}>
                <h1>Volunteer Application</h1>
                <p>We sincerely appreciate you taking the time to fill out this form and for volunteering. It means a lot to us!</p>
            </header>
            <form onSubmit={handleSubmit} className={css` margin: 20px auto; display: flex; flex-direction: column;`}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" required/>

                <p>How should we contact you?</p>
                <div className={css`display: flex; justify-content: space-around; align-items: center;`}>
                    <div>
                        <input type="checkbox" id="phone" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div>
                        <input type="checkbox" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Email Address" required/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone Number" required/>

                <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" placeholder="Age" />
                    </div>
                    <div className={css`display: flex; flex-direction: column;`}>
                        <label htmlFor="availability">When are you open?</label>
                        <input type="time" id="availability"  required/>
                    </div>
                </div>

                <label htmlFor="project">I am available for these projects:</label>
                <select id="project" required>
                    <option></option>
                </select>

                <input type="submit" />
                <Link to="/volunteer#search-opportunities">Previous</Link>
            </form>
        </div>
    );
}