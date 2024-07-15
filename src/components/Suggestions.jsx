import { css } from '@emotion/css';

export default function Suggestions() {
    const submitSuggestion = (event) => {
        event.preventDefault();
    }

    return (
        <div id="suggestions" className={css`margin: 200px; height: 400px; background-color: #F8F8F8; border-radius: 15px; display: flex; justify-content: space-evenly; align-items: center;`}>

            <form id="suggestions-form" onSubmit={submitSuggestion} className={css`height: 350px; display: flex; flex-direction: column; justify-content: space-evenly;`}>
                <h2 className='suggestclass'>Have a suggestion?</h2>
                <p className='thoughtclass'>Let us know your thoughts!</p>
                <input type="email" placeholder="Email" className='emailclass'/>
                <textarea placeholder="Your thoughts" cols="50" rows="5" className='textareaclass'/>
                <input type="submit" className='submitclass'/>
            </form>

            <div className={css`height: 200px;`}>
                <img src="./images/suggestions.png" alt="suggestions" className={css`height: 200px;`} />
            </div>

        </div>
    )
}