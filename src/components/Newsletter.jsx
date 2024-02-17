import { css } from '@emotion/css';

export default function Newsletter() {
    return (
        <div className={css`display: flex; height: 300px; width: 70vw; justify-content: center; margin: 20px auto; border: 1px solid #63D79C;`}>
            <div id="newsletter-left" className={css`width: 40vw; height: 300px; display: flex; flex-direction: column; justify-content: space-evenly; padding: 50px;`}>
                <h2>Stay tuned.</h2>
                <p>Subscribe to our newsletter for cool gardening tips, news, and other useful resources.</p>
                <div id="newsletter-icons" className={css`display: flex; justify-content: space-evenly; flex-wrap: wrap;`}>
                    <div id="each-icon" className={css`display: flex; justify-content: space-evenly;`}>
                        <img src="/images/newsletter/tips.png" alt="tips" className={css`height: 20px;`}/>
                        <p>Garden Tips</p>
                    </div>
                    <div id="each-icon" className={css`display: flex; justify-content: space-evenly;`}>
                        <img src="/images/newsletter/tutorials.png" alt="tutorials" className={css`height: 20px;`}/>
                        <p>Tutorials</p>
                    </div>
                    <div id="each-icon" className={css`display: flex; justify-content: space-evenly;`}>
                        <img src="/images/newsletter/news.png" alt="news" className={css`height: 20px;`}/>
                        <p>News</p>
                    </div>
                    <div id="each-icon" className={css`display: flex; justify-content: space-evenly;`}>
                        <img src="/images/newsletter/inspiration.png" alt="inspiration" className={css`height: 20px;`}/>
                        <p>Inspiration</p>
                    </div>
                </div>
                <form id="newsletter-form">
                    <input type="text" placeholder="Enter your Email" />
                    <input type="submit" />
                </form>
            </div>
            <div id="newsletter-right" >
                <img src="/images/newsletter/newsletter-image.jpeg" alt="newsletter" className={css`height: 300px;`}/>
            </div>
            
        </div>
    )
}