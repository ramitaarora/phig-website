import { css } from '@emotion/css';

export default function ApproachPage() {
    return (
        <div>

            <main className={css`display: flex; justify-content: space-evenly;`}>
                <div>
                    <h1>Our</h1>
                    <h1>Mission</h1>
                    <h1>& Vision</h1>
                    <hr />
                    <h4>To educate students, staff, and community members in the need for water conservation with a demonstration garden using no pesticides, water recycling methods, drought tolerant and native plantings.</h4>
                    <h4>Safe and effective gardening tips & tricks for your home garden </h4>
                    <hr />
                    <h2>Our Goals for 2026</h2>
                    <p>We’re racing to hit these targets to help the world reverse climate change and biodiversity loss. Together, we find the paths to make change possible.</p>
                </div>
                <div>
                    <img src="./images/our-approach-poppies.jpeg" alt="our-approach-poppies" width="300px" />
                    <h2>About us</h2>
                    <p>Volunteers, working together with various groups and organizations, transformed a former wasteland into a thriving wildlife habitat and water-conserving garden at Pleasant Hill Education Center. </p>
                    <p>The project began in Spring 2007 as a landscape design class initiative and culminated in a beautiful and sustainable space. Led by Teacher Monika Olsen, students from the Gardening Program, Boy Scouts, Girl Scouts, Contra Costa Master Gardeners, DVC's adaptive horticulture class, and other enthusiastic volunteers collaborated with the City of Pleasant Hill, Central Contra Costa Sanitary District, and other donors. </p>
                    <p>The official groundbreaking occurred on September 15, 2007, during Pleasant Hill's Community Service Day. The garden, situated near Pleasant Hill Middle School and behind the Pleasant Hill Library, serves as a demonstration garden showcasing sustainable practices such as pesticide-free methods, water conservation, recycling, and the use of drought-tolerant and native plants.</p>
                </div>


            </main>
            
            <div className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./images/homepage/goal-banner.png'); height: 100px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white; display: flex; justify-content: space-evenly; align-items: center;`}>
                <div>
                    <img src="./images/homepage/goal-icon-water.png" alt="water-conservation" className={css`height: 50px;`} />
                    <p>Demonstrate water conservation</p>
                </div>
                <div>
                    <img src="./images/homepage/goal-icon-wildlife.png" alt="wildlife" className={css`height: 50px;`} />
                    <p>Create a wildlife habitat</p>
                </div>
                <div>
                    <img src="./images/homepage/goal-icon-plant.png" alt="plant" className={css`height: 50px;`} />
                    <p>Provide a hands-on experience for all ages</p>
                </div>
                <div>
                    <img src="./images/homepage/goal-icon-community.png" alt="community" className={css`height: 50px;`} />
                    <p>Create a community area of natural beauty</p>
                </div>
                <div>
                    <img src="./images/homepage/goal-icon-replace.png" alt="replace" className={css`height: 50px;`} />
                    <p>Replace a community eyesore</p>
                </div>
            </div>

        </div>
    )
}