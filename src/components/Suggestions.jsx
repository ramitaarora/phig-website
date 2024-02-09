export default function Suggestions() {
    return (
        <div id="suggestions">
            <div>
                <h2>Have a suggestion?</h2>
                <p>Let us know your thoughts!</p>

                <form id="suggestions-form">
                    <input type="email" placeholder="Email" />
                    <input type="textarea" placeholder="Your thoughts" />
                    <input type="submit" />
                </form>
            </div>

            <div>
                <img src="./images/suggestions.png" alt="suggestions" />
            </div>

        </div>
    )
}