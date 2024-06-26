import Newsletter from '../components/Newsletter';
import Newsfeed from '../components/Newsfeed';
import { useEffect } from 'react';

export default function NewsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <header id="news-feed-header">
                <h1>News Feed</h1>
            </header>

            <Newsfeed />

            <Newsletter />

        </div>
    )
}