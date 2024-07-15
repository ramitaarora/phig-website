import { css } from '@emotion/css';

export default function WebsiteResource({ name, description, image, link }) {
    return (
        <div id="website-resource" className={css`display: flex; justify-content: space-evenly; align-items: center; margin: 0 auto;`}>
            <div className='websiteresourseimagediv'>
                <img className='websiteresourseimage' src={image} alt={name} title={name} loading="lazy"/>
            </div>
            <div>
                <h3 className='title'>{name}</h3>
                <p className='description'>{description}</p>
                <a className='learnmore' href={link} target="_blank">Learn More</a>
                <div className="arrow"></div>
            </div>
        </div>
    )
}