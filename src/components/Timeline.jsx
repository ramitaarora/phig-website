import { css } from '@emotion/css';

export default function Timeline({ date, firstImage, secondImage, header, description, mainImage, caption, index }) {
    return (
        <div className={css`display: flex; justify-content: space-between; align-items: center; margin: 5% 5%;`}>
            <div className={css`width: 50%; padding: 2%; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center;`}>
                <h3>{date}</h3>
                <div className={css`display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; margin-top: 30%;`}>
                    <img src={firstImage} alt="timeline-firstImage" className={css`height: 150px; width: 150px; border-radius: 100%; margin-bottom: 20px; border: 3px solid var(--accent); object-fit: cover; object-position: center;`}/>
                    {secondImage ? <img src={secondImage} alt="timeline-secondImage" className={css`height: 150px; width: 150px; border-radius: 100%; border: 3px solid var(--accent); object-fit: cover; object-position: center;`}/> : null}
                </div>
            </div>
            <div className={css`width: 50%; padding: 2%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;`}>
                <h4 className={css`text-align: center; margin-bottom: 20px;`}>{header}</h4>
                <p className={css`line-height: 30px;`}>{description}</p>
                <div className={index % 2 === 0 ? "main-image-even" : "main-image-odd"}>
                    <img src={mainImage} alt="timeline-mainImage" className={css`height: 250px; width: 350px; object-fit: cover; object-position: center; border: 20px solid black;`}/>
                    {caption ? <figcaption className={css`font-size: 10px; text-align: center;`}>{caption}</figcaption> : null}
                </div>
            </div>
        </div>
    )
}