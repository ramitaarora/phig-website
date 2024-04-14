import { css } from '@emotion/css';

export default function NurseryResource({ name, description, image, link, location, days, hours, phone}) {
    return (
        <div id="nursery-resource" className={css`display: flex; justify-content: space-evenly`}>
            <div className='nurseryresourseimagediv'>
                <img className='nurseryresourseimage' src={image} alt={location} />
            </div>
            <div className='nureserresbod'>
                <div className='nurseryres'>
                <h3 className='title1'>{name}</h3>
                <div className='phone-number'>
                        <span className='phone-icon'>📞  </span>{phone}
                </div>
                <a className='learnmore' href={link}>Learn More</a>
                <div class="arrow"></div>
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