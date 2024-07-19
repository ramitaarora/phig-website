import { css } from '@emotion/css';

export default function NurseryResource({ name, description, image, link, location, days, hours, phone }) {
    return (
        <div id="nursery-resource" className={css`display: flex; justify-content: space-evenly;`}>
            <div className='nurseryresourseimagediv'>
                <img className='nurseryresourseimage' src={image} alt={name} title={name} loading="lazy" />
            </div>
            <div className='nureserresbod'>
                <div className='nurseryres'>
                    <h3 className='title1'>{name}</h3>
                    <div className='phone-number'>
                        <span className='phone-icon'>📞  </span>{phone}
                    </div>
                    <a className='learnmore' href={link} target="_blank">Learn More</a>
                    <div className="arrow"></div>
                </div>
                <div className='nurseryres2'>
                    <div className='location'><span className='location-icon'>📍   </span>{location}</div>
                    <div className='days'><span className='clock-icon'>🕑   </span>{days}</div>
                    <div className='hours'> {hours}</div>
                </div>

            </div>
        </div>
    )
}