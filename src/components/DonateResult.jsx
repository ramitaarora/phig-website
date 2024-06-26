import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function DonateResult({ name, subtitle, picture, description }) {
    return (
        <div id="donate-result" className={css`width: 300px; border-radius: 15px; box-shadow: 0px 5px 5px lightgrey; margin: 15px;`}>
            <div id="donate-result-image" className={css`height: 170px; overflow: hidden; object-position: center; object-fit: cover; border-radius: 15px 15px 0 0;`}>
                <img src={picture} alt={name} loading="lazy"/>
            </div>
            <div id="donate-result-card" className={css`padding: 20px; border-radius: 15px 15px 0 0; background-color: white; margin-bottom: 10px; line-height: 20px; position: relative; top: -10px;`}>
                <h3 className={css`font-size: 16px; margin: 5px 0;`}>{name}</h3>
                <p className={css`color: grey; font-size: 14px; margin: 5px 0;`}>{subtitle}</p>
                <p className={css`font-size: 14px; margin: 5px 0;`}>{description ? description : null}</p>
            </div>
            <div id="donate-result-buttons" className={css`display: flex; justify-content: space-between; align-items: center; padding: 15px;`}>
                <div className={css`display: flex; background-color: none; border: none; align-items: center;`}>
                    <img src="./images/donation/wish.png" alt="wish" className={css`height: 25px; margin-right: 10px;`}/>
                    <p>Wish</p>
                </div>
                <Link to="/pay"><button className='green-button' style={{ padding: '5px 20px'}}>
                    <p>Donate</p>
                    <img src="./images/donation/donate-hand.png" alt="donate-hand" className={css`height: 30px; margin-left: 10px;`}/>
                </button></Link>
            </div>
        </div>
    )
}