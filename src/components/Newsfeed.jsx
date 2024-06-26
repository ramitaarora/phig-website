import blogPosts from '../data/blogPosts.json';
import { Link } from 'react-router-dom';

export default function Newsfeed() {
    return (
        <section id="news-feed">
        {blogPosts.map((post, index) =>
            <div key={index}>
                <Link to={'/news/' + post.id} style={{ textDecoration: 'none' }}>
                    <div className="news-feed-article" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${post.image})`}}>
                        <h3 className="news-feed-title">{post.title}</h3>
                        <p className="news-feed-author">{post.author}</p>
                    </div>
                </Link>
            </div>
            
        )}
    </section>
    )
}