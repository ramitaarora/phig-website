export default function Newsletter() {
    return (
        <div className="newsletter">
            <div id="newsletter-left">
                <h2 id="newsletter-title">Stay <span style={{ color: 'var(--enabled-color)' }}>Tuned.</span></h2>
                <p>Subscribe to our newsletter for cool gardening tips, news, and other useful resources.</p>
                <ul id='newsletter-icons'>
                    <li>
                        <img src="/phig/images/newsletter/tips.png" alt="tips"/>
                        <p>Garden Tips</p>
                    </li>
                    <li>
                        <img src="/phig/images/newsletter/tutorials.png" alt="tutorials"/>
                        <p>Tutorials</p>
                    </li>
                    <li>
                        <img src="/phig/images/newsletter/news.png" alt="news"/>
                        <p>News</p>
                    </li>
                    <li>
                        <img src="/phig/images/newsletter/inspiration.png" alt="inspiration"/>
                        <p>Inspiration</p>
                    </li>
                </ul>
                <form id="newsletter-form">
                    <input type="text" placeholder="Enter your email" />
                    <input type="submit" />
                </form>
            </div>
            <div id="newsletter-right" >
            </div>
            
        </div>
    )
}