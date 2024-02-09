import { css } from '@emotion/css';

export default function Suggestions() {
    return (
        <div id="suggestions" className={css`margin: 200px; height: 300px; background-color: #F8F8F8; border-radius: 15px; display: flex; justify-content: space-evenly; align-items: center;`}>

            <form id="suggestions-form" className={css`height: 250px; display: flex; flex-direction: column; justify-content: space-evenly;`}>
                <h2>Have a suggestion?</h2>
                <p>Let us know your thoughts!</p>
                <input type="email" placeholder="Email" />
                <textarea placeholder="Your thoughts" cols="50" rows="5" />
                <input type="submit" />
            </form>

            <div className={css`height: 200px;`}>
                <img src="./images/suggestions.png" alt="suggestions" className={css`height: 200px;`} />
            </div>

        </div>
    )
}