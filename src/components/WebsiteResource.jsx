import { css } from '@emotion/css';

export default function WebsiteResource({ name, description, image, link }) {
    return (
        <div id="website-resource" className={css`display: flex; justify-content: space-evenly`}>
            <div className='websiteresourseimagediv'>
                <img className='websiteresourseimage' src={image} alt={name} />
            </div>
            <div>
                <h3 className='title'>{name}</h3>
                <p className='description'>{description}</p>
                <a className='learnmore' href={link}>Learn More</a>
                <div class="arrow"></div>
            </div>
        </div>
    )
}