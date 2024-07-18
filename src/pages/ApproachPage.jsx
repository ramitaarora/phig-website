import { css } from '@emotion/css';
import { useEffect } from 'react';

export default function ApproachPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <svg width="480" height="251" viewBox="0 0 480 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 251C99.8582 77.8497 361.608 11.5207 480 0H0V251Z" fill="#F0B353" fill-opacity="0.2" />
                <path d="M0 221.5C88 68.7 318.667 10.1667 423 0H0V221.5Z" fill="#F0B353" />
            </svg>

            <main className={css`width: 100%; display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap; position: relative; top: -100px; @media (max-width: 786px) { flex-direction: column; }`}>

                <div className='approach-col'>
                    <div className={css`@media (max-width: 786px) { display: flex; align-items: flex-end; justify-content: center; }`}>
                        <div className={css`@media (max-width: 786px) { width: 30%; } @media (max-width: 550px) { width: 100%; }`}>
                            <h1>Our</h1>
                            <h1>Mission</h1>
                            <h1>& Vision</h1>
                        </div>

                        <div className={css`width: 30%; @media (min-width: 786px) { display: none; } @media (max-width: 550px) { display: none; }`}>
                            <div class='approach-mask'>
                                <img src="./images/our-approach-poppies.jpeg" alt="CA State Flower" title="CA State Flower" width="350px" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <hr />

                    <p>To educate students, staff, and community members in the need for water conservation with a demonstration garden using no pesticides, water recycling methods, drought tolerant and native plantings.</p>
                    <p className={css`color: var(--orange); margin-top: 15px;`}>Safe and effective gardening tips & tricks for your home garden </p>
                    <hr />

                    <h2 className={css`color: var(--orange);`}>Our Goals for 2026</h2>
                    <p className={css`margin-top: 15px;`}>We’re racing to hit these targets to help the world reverse climate change and biodiversity loss. Together, we find the paths to make change possible.</p>
                </div>
                <div className='approach-col'>
                    <div className={css`width: 100%; padding: 20px; @media (max-width: 786px) { display: none; }`}>
                        <div class='approach-mask'>
                            <img src="./images/our-approach-poppies.jpeg" alt="CA State Flower" title="CA State Flower" width="350px" loading="lazy" />
                        </div>
                    </div>

                    <h2>About us</h2>
                    <span className='approach-underline'></span>
                    <div id="approach-text">
                        <p>Volunteers, working together with various groups and organizations, transformed a former wasteland into a thriving wildlife habitat and water-conserving garden at Pleasant Hill Education Center. </p>
                        <p>The project began in Spring 2007 as a landscape design class initiative and culminated in a beautiful and sustainable space. Led by Teacher Monika Olsen, students from the Gardening Program, Boy Scouts, Girl Scouts, Contra Costa Master Gardeners, DVC's adaptive horticulture class, and other enthusiastic volunteers collaborated with the City of Pleasant Hill, Central Contra Costa Sanitary District, and other donors. </p>
                        <p>The official groundbreaking occurred on September 15, 2007, during Pleasant Hill's Community Service Day. The garden, situated near Pleasant Hill Middle School and behind the Pleasant Hill Library, serves as a demonstration garden showcasing sustainable practices such as pesticide-free methods, water conservation, recycling, and the use of drought-tolerant and native plants.</p>
                    </div>
                </div>


            </main>

            <div className="approach-border">
                <svg width="480" height="251" viewBox="0 0 480 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M480 -1.52588e-05C380.142 173.15 118.392 239.479 0 251L480 251L480 -1.52588e-05Z" fill="#F0B353" fill-opacity="0.2" />
                    <path d="M480 29.5C392 182.3 161.333 240.833 57 251L480 251L480 29.5Z" fill="#F0B353" />
                </svg>
            </div>


            <div className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url('./images/homepage/goal-banner.png'); height: 100px; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover; color: white; display: flex; justify-content: space-evenly; align-items: center; border-top: 5px solid var(--success); border-bottom: 5px solid var(--success); position: relative; top: -100px; @media (max-width: 900px) { display: none; }`}>
                <div id="approach-icons">
                    <img src="./images/homepage/goal-icon-water.png" alt="water-conservation" />
                    <p>Demonstrate water conservation</p>
                </div>
                <div id="approach-icons">
                    <img src="./images/homepage/goal-icon-wildlife.png" alt="wildlife" />
                    <p>Create a wildlife habitat</p>
                </div>
                <div id="approach-icons">
                    <img src="./images/homepage/goal-icon-plant.png" alt="plant" />
                    <p>Provide a hands-on experience for all ages</p>
                </div>
                <div id="approach-icons">
                    <img src="./images/homepage/goal-icon-community.png" alt="community" />
                    <p>Create a community area of natural beauty</p>
                </div>
                <div id="approach-icons">
                    <img src="./images/homepage/goal-icon-replace.png" alt="replace" />
                    <p>Replace a community eyesore</p>
                </div>
            </div>

        </div>
    )
}