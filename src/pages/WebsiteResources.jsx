import { css } from '@emotion/css';
import WebsiteResource from '../components/WebsiteResource';
import websiteResources from '../data/websiteResources.json';

export default function WebsiteResources() {
    return (
        <div>
            <header>
                <h1 className='header'>Website Resources</h1>
            </header>

            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;margin:200px`}>
                {websiteResources.map((resource, index) =>
                    <div key={index} className={css`height: 280px; width: 493px; margin:10px;margin-bottom:20px;border: 2px solid lightgrey; padding: 40px; border-bottom:2px solid #97C159 `}>
                        <WebsiteResource name={resource.name} description={resource.description} image={resource.image} link={resource.link} />
                    </div>
                )}
            </main>
        </div>
    )
}