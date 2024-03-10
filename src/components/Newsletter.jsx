import { css } from '@emotion/css';

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div id="newsletter-left">
                <h2 id="newsletter-title">Stay <span style={{ color: 'var(--enabled-color)' }}>Tuned.</span></h2>
                <p>Subscribe to our newsletter for cool gardening tips, news, and other useful resources.</p>
                <ul id='newsletter-icons'>
                    <li>
                        <img src="/images/newsletter/tips.png" alt="tips" className={css`height: 20px;`}/>
                        <p>Garden Tips</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/tutorials.png" alt="tutorials" className={css`height: 20px;`}/>
                        <p>Tutorials</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/news.png" alt="news" className={css`height: 20px;`}/>
                        <p>News</p>
                    </li>
                    <li>
                        <img src="/images/newsletter/inspiration.png" alt="inspiration" className={css`height: 20px;`}/>
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