import { css } from '@emotion/css';
import contributors from '../data/contributers.json';

export default function Leaderboard() {
    return (
        <section id="leaderboard" className={css`margin: 90px auto; width: 50%; text-align: center; font-family: "Inria Sans", sans-serif;`}>

            <div id="leaderboard-header">
                <h2 style={{fontWeight:'500'}}>Leaderboard</h2>
                <p style={{fontSize: 'small', color:'grey', marginTop:'15px',marginBottom:'50px'}}>A special thank you to our recent contributors</p>
            </div>

            <div id="leaderboard-filter" className={css`display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px`}>
                <div >
                    <input style={{color: 'grey',padding: '20px',border: 'none', boxShadow: '3px 3px 3px 3px lightgrey',height:'50px',width:'250px',borderRadius:'30px'}} type="text" name="search" value="Search" placeholder="Search"/>
                </div>
                <div>
                    <button className='pill-button'>Contributions</button>
                    <button className='pill-button-outline'>Special Volunteers</button>
                </div>
            </div>

            <div id="leaderboard-list">
                {contributors ? contributors.map((contributor, index) => (
                    <div id="each-contributer" key={index} className={css`display: flex; justify-content: space-between; align-items: center; box-shadow: 5px 5px 5px lightgrey; margin: 15px auto; border-radius: 15px; padding: 10px; height: 50px;`}>
                        <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                            <img src="./images/homepage/dollar-sign.png" alt="dollar-sign" className={css`height: 70px;margin-left: -20px`}/>
                            <h4 style={{fontWeight:'500'}}>{contributor.name}</h4>
                        </div>
                        <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                            <p style={{fontSize:'small'}}>{contributor.date}</p>
                            {/* <p className={css`margin-left: 15px;`}>${contributor.amount}</p> */}
                        </div>
                    </div>
                )) : null}

            </div>

        </section>
    )
}