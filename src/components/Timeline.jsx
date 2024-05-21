import { css } from '@emotion/css';

export default function Timeline({ date, firstImage, secondImage, header, description, mainImage }) {
    return (
        <div className={css`display: flex; justify-content: space-between; align-items: center; margin: 2% 5%;`}>
            <div className={css`width: 50%; padding: 2%; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center;`}>
                <h3>{date}</h3>
                <div className={css`display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;`}>
                    <img src={firstImage} />
                    <img src={secondImage} />
                </div>
            </div>
            <div className={css`width: 50%; padding: 2%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;`}>
                <h4 className={css`text-align: center; margin-bottom: 20px;`}>{header}</h4>
                <p className={css`line-height: 30px;`}>{description}</p>
                <img src={mainImage} />
            </div>
        </div>
    )
}