import { css } from '@emotion/css';
import WebsiteResource from '../components/WebsiteResource';
import websiteResources from '../data/websiteResources.json';
import { useEffect } from 'react';

export default function WebsiteResources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div>
            <header>
                <h1 className='header'>Website Resources</h1>
            </header>

            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; margin: 0 auto; @media (max-width: 786px) { margin: 5%; }`}>
                {websiteResources.map((resource, index) =>
                    <div key={index} className={css`height: 250px; width: 500px; margin:20px; border: 2px solid lightgrey; padding: 40px; border-bottom:2px solid #97C159 `}>
                        <WebsiteResource name={resource.name} description={resource.description} image={resource.image} link={resource.link} />
                    </div>
                )}
            </main>
        </div>
    )
}