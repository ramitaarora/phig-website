import { css } from '@emotion/css';

export default function WebsiteResource({ name, description, image, link }) {
    return (
        <div id="website-resource" className={css`display: flex; justify-content: space-evenly;`}>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={link}>Learn More</a>
            </div>
        </div>
    )
}