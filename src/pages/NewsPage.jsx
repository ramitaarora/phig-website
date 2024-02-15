import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import blogPosts from '../assets/data/blogPosts';

export default function NewsPage() {
    return (
        <div>
            <header>
                <h1>News Feed</h1>
            </header>

            <section id="news-feed">
                {blogPosts.map((post, index) =>
                    <div key={index}>
                        <Link to={'/news/' + post.id}>
                            <p>{post.title}</p>
                        </Link>
                    </div>
                    
                )}
            </section>

            <Newsletter />

        </div>
    )
}