import { css } from '@emotion/css';
import WebsiteResource from '../components/WebsiteResource';

const websiteResources = [
    {
        name: "Bringing Back the Natives Garden Tour",
        description: "A terrific resource with lots of local East Bay information. Bringing Back the Natives presents an incredible tour of thirty or more native gardens in May of each year.",
        image: "/images/website-resources/native-garden-tour.png",
        link: ""
    },
    {
        name: "California Native Plant Society",
        description: "Provides educational information about California native flora and efforts to preserve it.",
        image: "/images/website-resources/ca-plant-society.png",
        link: ""
    },
    {
        name: "CalFlora",
        description: "A resource you can use to look up information about plants that grow wild in California including their common and scientific names, where they grow, what companions to plant in a garden, and pictures.",
        image: "/images/website-resources/calflora.png",
        link: ""
    },
    {
        name: "The Contra Costa Water District (CCWD)",
        description: "An outstanding resource for selecting plants, viewing excellent garden designs, installing your garden and more.",
        image: "/images/website-resources/contra.png",
        link: ""
    },
    {
        name: "The East Bay Chapter of the California Native Plant Society",
        description: "Provides information about East Bay Activities of CNPS including an archive of newsletters and information on the annual October plant sale.",
        image: "/images/website-resources/colorado-plant-society.png",
        link: ""
    }
]

export default function WebsiteResources() {
    return (
        <div>
            <header>
                <h1 className='header'>Website Resources</h1>
            </header>

            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;margin:200px`}>
                {websiteResources.map((resource, index) =>
                    <div key={index} className={css`height:273px;width: 493px; margin:10px;margin-bottom:10px;border: 2px solid lightgrey; padding: 40px; border-bottom:2px solid #97C159 `}>
                        <WebsiteResource name={resource.name} description={resource.description} image={resource.image} link={resource.link} />
                    </div>
                )}
            </main>
        </div>
    )
}