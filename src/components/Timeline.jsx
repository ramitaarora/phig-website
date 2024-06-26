import { css } from '@emotion/css';

export default function Timeline({ date, firstImage, secondImage, header, description, mainImage, caption, index }) {
    return (
        <div className={css`display: flex; justify-content: space-between; align-items: center; margin: 0 5%;`}>
            <div className={css`width: 50%; text-align: center; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; margin-right: 40px;`}>
                <h3>{date}</h3>
                <div className={css`display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; margin-top: 30%; align-self: flex-end;`}>
                    <img src={firstImage} alt="timeline-firstImage" className={css`height: 150px; width: 150px; border-radius: 100%; margin-bottom: 20px; border: 3px solid var(--accent); object-fit: cover; object-position: center;`} loading="lazy" />
                    {secondImage ? <img src={secondImage} alt="timeline-secondImage" className={css`height: 150px; width: 150px; border-radius: 100%; border: 3px solid var(--accent); object-fit: cover; object-position: center;`} loading="lazy" /> : null}
                </div>
            </div>
            <div className={css`position: relative; top: 70px;`}>
                <svg width="23" height="700" viewBox="0 0 23 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.2857" cy="11.5432" r="11.1429" fill="#D9D9D9" />
                    <line x1="11.6857" y1="23" x2="11.6857" y2="700" stroke="#D9D9D9" stroke-width="1.37143" />
                </svg>
            </div>
            <div className={css`margin-left: 40px; width: 50%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;`}>
                <h4 className={css`text-align: center; margin-bottom: 20px;`}>{header}</h4>
                <p className={css`line-height: 30px;`}>{description}</p>
                <div className={index % 2 === 0 ? "main-image-even" : "main-image-odd"}>
                    <img src={mainImage} alt="timeline-mainImage" className={css`height: 250px; width: 350px; object-fit: cover; object-position: center; border: 20px solid black;`} loading="lazy" />
                    {caption ? <figcaption className={css`font-size: 10px; text-align: center;`}>{caption}</figcaption> : null}
                </div>
            </div>
        </div>
    )
}