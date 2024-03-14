import { css } from '@emotion/css';
import WebsiteResource from '../components/WebsiteResource';
import websiteResources from '../data/websiteResources.json';

export default function WebsiteResources() {
    return (
        <div>
            <header>
                <h1>Website Resources</h1>
            </header>

            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;`}>
                {websiteResources.map((resource, index) =>
                    <div key={index} className={css`width: 45%; margin: 20px; border: 1px solid lightgrey; padding: 30px;`}>
                        <WebsiteResource name={resource.name} description={resource.description} image={resource.image} link={resource.link} />
                    </div>
                )}
            </main>
        </div>
    )
}