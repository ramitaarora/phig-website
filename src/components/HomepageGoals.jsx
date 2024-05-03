import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

export default function Goals() {
    return (
        <section id="homepage-goals" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./images/homepage/goal-banner.png'); height: 500px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white; display: flex; justify-content: flex-end; align-items: center;`}>
            <div className={css`width: 90%; height: 80%; background-color: rgba(255, 255, 255, 0.2); display: flex; padding: 3%`}>
                <div className={css`width: 35%; display: flex; flex-direction: column; justify-content: space-evenly; padding: 3%;`}>
                    <h2 style={{color:'#539A43', marginBottom:'30px'}}>Our Goals for 2026</h2>
                    <p style={{marginBottom:'30px'}}>We're racing to hit these targets to help the world reverse climate change and biodiversity loss. Together, we find the paths to make change possible.</p>
                    <Link to="/volunteer"><button className='green-button'>Volunteer Today</button></Link>
                </div>

                <div className={css`display: flex; flex-direction: column; flex-wrap: wrap; width: 30%; padding: 3%;`}>
                    <div id="homepage-each-goal">
                        <img src="./images/homepage/goal-icon-water.png" alt="water-conservation" />
                        <p>Demonstrate water conservation</p>
                    </div>
                    <div id="homepage-each-goal">
                        <img src="./images/homepage/goal-icon-wildlife.png" alt="wildlife" />
                        <p>Create a wildlife habitat</p>
                    </div>
                    <div id="homepage-each-goal">
                        <img src="./images/homepage/goal-icon-plant.png" alt="plant" />
                        <p>Provide a hands-on experience for all ages</p>
                    </div>
                    <div id="homepage-each-goal">
                        <img src="./images/homepage/goal-icon-community.png" alt="community" />
                        <p>Create a community area of natural beauty</p>
                    </div>
                    <div id="homepage-each-goal">
                        <img src="./images/homepage/goal-icon-replace.png" alt="replace"/>
                        <p >Replace a community eyesore</p>
                    </div>
                </div>
            </div>

        </section>
    )
}