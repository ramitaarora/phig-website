import { css } from '@emotion/css';
import contributors from '../data/contributers.json';

export default function Leaderboard() {
    return (
        <section id="leaderboard" className={css`margin: 90px auto; width: 50%; text-align: center;`}>

            <div id="leaderboard-header">
                <h2>Leaderboard</h2>
                <p>A special thank you to our recent contributors</p>
            </div>

            <div id="leaderboard-filter" className={css`display: flex; justify-content: space-between; align-items: center;`}>
                <div>
                    <input type="text" name="search" value="search" placeholder="Search" />
                </div>
                <div>
                    <button>Contributions</button>
                    <button>Special Volunteers</button>
                </div>
            </div>

            <div id="leaderboard-list">
                {contributors ? contributors.map((contributor, index) => (
                    <div id="each-contributer" key={index} className={css`display: flex; justify-content: space-between; align-items: center; box-shadow: 5px 5px 5px lightgrey; margin: 15px auto; border-radius: 15px;`}>
                        <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                            <img src="./phig-website/images/homepage/dollar-sign.png" alt="dollar-sign" className={css`height: 60px;`}/>
                            <h4>{contributor.name}</h4>
                        </div>
                        <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                            <p>{contributor.date}</p>
                            <p>${contributor.amount}</p>
                        </div>
                    </div>
                )) : null}

            </div>

        </section>
    )
}