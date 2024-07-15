export default function Newsletter() {
    const subscribe = (event) => {
        event.preventDefault();
    }

    return (
        <div className="newsletter">
            <div id="newsletter-left">
                <h2 id="newsletter-title">Stay <span style={{ color: 'var(--enabled-color)' }}>Tuned.</span></h2>
                <p>Subscribe to our newsletter for cool gardening tips, news, and other useful resources.</p>
                <ul id='newsletter-icons'>
                    <li>
                        <img src="/images/newsletter/tips.png" alt="tips"/>
                        <p>Garden Tips</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/tutorials.png" alt="tutorials"/>
                        <p>Tutorials</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/news.png" alt="news"/>
                        <p>News</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/inspiration.png" alt="inspiration"/>
                        <p>Inspiration</p>
                    </li>
                </ul>
                <form id="newsletter-form" onSubmit={subscribe}>
                    <input type="text" placeholder="Enter your email" />
                    <input type="submit"/>
                </form>
            </div>
            <div id="newsletter-right" >
            </div>
            
        </div>
    )
}