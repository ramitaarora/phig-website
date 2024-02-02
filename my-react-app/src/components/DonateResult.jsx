import { css } from '@emotion/css';

export default function DonateResult({ name, subtitle, picture, description }) {
    return (
        <div id="donate-result" className={css`width: 300px; border-radius: 15px; box-shadow: 0px 5px 5px lightgrey; margin: 15px;`}>
            <div id="donate-result-image" className={css`height: 170px; overflow: hidden; object-position: center; object-fit: cover; border-radius: 15px 15px 0 0;`}>
                <img src={picture} alt={name} />
            </div>
            <div id="donate-result-card" className={css`padding: 15px; border-radius: 15px 15px 0 0; background-color: white; margin-bottom: 10px; line-height: 20px; position: relative; top: -10px;`}>
                <h3 className={css`font-size: 16px; margin: 5px 0;`}>{name}</h3>
                <p className={css`color: lightgrey; font-size: 14px; margin: 5px 0;`}>{subtitle}</p>
                <p className={css`font-size: 14px; margin: 5px 0;`}>{description ? description : null}</p>
            </div>
            <div id="donate-result-buttons" className={css`display: flex; justify-content: space-between; align-items: center; padding: 15px;`}>
                <div className={css`display: flex; background-color: none; border: none; align-items: center;`}>
                    <img src="./images/donation/wish.png" alt="wish" className={css`height: 30px; margin-right: 10px;`}/>
                    <p>Wish</p>
                </div>
                <button className={css`display: flex; background-color: darkgreen; color: white; border: none; align-items: center; padding: 5px 10px; border-radius: 10px;`}>
                    <p>Donate</p>
                    <img src="./images/donation/donate-hand.png" className={css`height: 30px; margin-left: 10px;`}/>
                </button>
            </div>
        </div>
    )
}