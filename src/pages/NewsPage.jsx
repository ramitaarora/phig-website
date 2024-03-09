import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import blogPosts from '../data/blogPosts.json';

export default function NewsPage() {
    return (
        <div>
            <header className={css`text-align: center; margin: 30px 0;`}>
                <h1>News Feed</h1>
            </header>

            <section id="news-feed" className={css`margin: 30px 250px;`}>
                {blogPosts.map((post, index) =>
                    <div key={index}>
                        <Link to={'/news/' + post.id}>
                            <div className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${post.image}); background-position: top; background-size: cover; height: 250px; width: 100%; color: white; margin: 20px auto;`}>
                                <div className={css`height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: flex-end;`}>
                                    <h3 className={css`margin: 0 0 20px 20px;`}>{post.title}</h3>
                                    <p className={css`margin: 0 0 40px 20px;`}>{post.author}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                )}
            </section>

            <Newsletter />

        </div>
    )
}