import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import DonateResult from '../components/DonateResult';
import donations from '../data/donations.json';

export default function DonationPage() {
    const [searchResults, setSearchResults] = useState(donations);
    const [input, setInput] = useState('')
    const [amount, setAmount] = useState('')
    const [plantGrowth, setPlantGrowth] = useState('1')
    const [plantHeight, setPlantHeight] = useState('200')

    const updateAmount = (event) => {
        event.preventDefault();
        setAmount(event.target.innerHTML);

        if (event.target.innerHTML === '$1' || event.target.innerHTML === '$5') {
            setPlantGrowth('2');
            setPlantHeight('150');
        }
        if (event.target.innerHTML === '$10' || event.target.innerHTML === '$20') {
            setPlantGrowth('3');
            setPlantHeight('300')
        }
        if (event.target.innerHTML === '$25' || event.target.innerHTML === '$50') {
            setPlantGrowth('4');
            setPlantHeight('400')
        }
        if (event.target.innerHTML === '$100' || event.target.innerHTML === '$200') {
            setPlantGrowth('5');
            setPlantHeight('450')
        }
    }

    const setAll = (event) => {
        event.preventDefault();
        setSearchResults(donations);
    }

    const setMaterials = (event) => {
        event.preventDefault();
        setSearchResults(donations.filter(result => result.type === 'Material'));
    }

    const setTools = (event) => {
        event.preventDefault();
        setSearchResults(donations.filter(result => result.type === 'Tool'));
    }

    const setPlants = (event) => {
        event.preventDefault();
        setSearchResults(donations.filter(result => result.type === 'Plant'));
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (input.length > 1) {
            setSearchResults(donations.filter(result => result.name.toLowerCase().includes(input.toLowerCase()) || result.type.toLowerCase().includes(input.toLowerCase())));
        }
        else {
            setSearchResults(donations);
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section id="donation-page">
            <header className={css`height: 400px; width: 100%; background-color: #081821; color: white; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 30px; padding: 8%;`}>
                <h1 className={css`position: relative; top: -50px;`}>Donate and watch your PHIG tree grow!</h1>
                <p className={css`position: relative; top: -50px; margin-top: 30px;`}>Our volunteer team is growing every day and helping you learn ways to keep our planet healthy. Plant with us and track our progress!</p>
            </header>

            <div id="quick-donate" className={css`border-radius: 50% 50% 0 0; display: flex; justify-content: space-evenly; border-radius: 20% 20% 0 0; position: relative; top: -105px; background-color: white; height: 500px; @media (max-width: 800px) { flex-direction: column; height: fit-content; }`}>
                <div id="quick-donate-image" className={css`width: 30%; display: flex; flex-direction: column; @media (max-width: 800px) { width: 100%; }`}>
                    <div id="tag" className={css`background-color: darkgreen; color: white; padding: 10px 15px; border-radius: 10px; position: relative; left: -30%; top: 35px; transform: rotate(350deg); text-align: center; width: fit-content; @media (max-width: 800px) { display: none; }`}>
                        <p>$10 donated =</p>
                        <p>1 new stage</p>
                    </div>
                    <div className={css`display: flex; align-items: flex-end; justify-content: center; height: 100%;`}>
                        <img src={`./images/donation/plant-growth-${plantGrowth}.png`} className={css`height: ${plantHeight}px;`} alt="seed-grows" loading="lazy" />
                    </div>
                </div>
                <form id="quick-donate-form" className={css`padding: 20px; border: 1px solid lightgrey; border-radius: 15px; box-shadow: 0px 5px 10px lightgrey; text-align: center; position: relative; top: -20px; background-color: white; width: 400px; height: 100%; @media (max-width: 800px) { position: static !important; top: 0; margin: 0 auto;}`}>
                    <h2 className={css`margin: 10px;`}>Join #PHIG</h2>
                    <div id="quick-form-buttons" className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; margin-top: 20px;`}>
                        <button onClick={updateAmount}>$1</button>
                        <button onClick={updateAmount}>$5</button>
                        <button onClick={updateAmount}>$10</button>
                        <button onClick={updateAmount}>$20</button>
                        <button onClick={updateAmount}>$25</button>
                        <button onClick={updateAmount}>$50</button>
                        <button onClick={updateAmount}>$100</button>
                        <button onClick={updateAmount}>$200</button>
                    </div>
                    <input type="text" placeholder='Custom amount' value={amount} onChange={event => setAmount(event.target.value)} className='form-input' style={{ width: '94%', margin: '20px auto 0 auto' }} />
                    <Link to="/"><input type="submit" value="Next" className='green-button' style={{ margin: '30px auto 0 auto' }} /></Link>
                </form>
            </div>

            {/*<div id="other-donations" className={css`padding: 0 50px; background-color: white; margin-top: 0; display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap; max-width: 100%; @media (max-width: 1000px) { flex-direction: column; }`}>
                <div id="other-donations-container" className={css`background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 30%, rgba(232, 232, 232, 0.7) 60%), url('./images/homepage/leaf-background.jpeg') center/cover; background-position: top right; background-repeat: no-repeat; margin: 0 auto; width: 45%; padding: 40px; height: 500px; box-shadow: 5px 5px 5px lightgrey; @media (max-width: 1000px) { width: 80%; margin: 10px auto; }`}>
                    <div id="other-donations-header" className={css`text-align: center; padding: 20px; height: 50%; display: flex; flex-direction: column; justify-content: space-evenly;`}>
                        <h2 className={css`color: #8D9E42`}>Support Our Mission</h2>
                        <p className={css`font-size: 14px;`}>We welcome donations by credit/debit card, PayPal, check, domestic or international wire, or stock transfer. We accept automatic monthly donations via Credit Card and Paypal.</p>
                        <div className={css`margin: 0 auto;`}>
                            <svg width="224" height="1" viewBox="0 0 224 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="93" y1="0.5" x2="224" y2="0.499989" stroke="url(#paint0_linear_0_1)" />
                                <line x1="93" y1="0.5" x2="4.37114e-08" y2="0.500008" stroke="url(#paint1_linear_0_1)" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="144.494" y1="1" x2="245.833" y2="1.00001" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D6D6D6" />
                                        <stop offset="0.5" stopColor="#BDBDBD" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_0_1" x1="56.4434" y1="-5.62336e-06" x2="-15.5" y2="-5.2717e-06" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D6D6D6" />
                                        <stop offset="0.5" stopColor="#BDBDBD" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className={css`font-size: 11px; color: grey;`}>Please make your check payable to Pleasant Hill Instructional Garden</p>
                    </div>
                    <div id="other-donations-contact" className={css`display: flex; justify-content: space-between; align-items: center; height: 50%;`}>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-evenly; height: 100%; align-items: flex-start; padding: 20px; width: 50%;`}>
                            <button className='green-button' style={{ borderRadius: '15px 0px 15px 0px' }}>Donate by Check</button>
                            <button className='green-button' style={{ borderRadius: '15px 0px 15px 0px' }}>Or Call Us</button>
                        </div>
                        <div className={css`display: flex; flex-direction: column; justify-content: space-evenly; height: 100%; align-items: flex-start; padding: 20px; width: 50%;`}>
                            <div className={css`display: flex; justify-content: space-between; align-items: center; width: 100%;`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8D9E42" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <p>P.O.Box 23454, Pleasant Hill, CA 94523</p>
                            </div>

                            <div>
                                <div className={css`display: flex; justify-content: space-between; align-items: flex-start; width: 100%;`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8D9E42" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                    <div className={css`margin: 0;`}>
                                        <p>(925) 482-6670</p>
                                        <p>Monday - Friday</p>
                                        <div id="donation-time-div" className={css`display: flex; justify-content: center; align-items: center; margin-top: 5px;`}>
                                            <p className='donation-time'>9 AM</p>
                                            <p>-</p>
                                            <p className='donation-time'>7 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="top-contributors-container" className={css`margin: 0 auto; width: 45%; padding: 40px; height: 500px; background-color: var(--header-color); border-radius: 20px; color: var(--primary); line-height: 35px; @media (max-width: 1000px) { width: 80%; margin: 10px auto; }`}>
                    <div id="top-contributors-header" className={css`display: flex; justify-content: space-between;`}>
                        <div>
                            <h2>Top Contributors</h2>
                            <p>PHIG thanks those who have donated</p>
                        </div>
                        <div className={css`display: flex; align-items: center;`}>
                            <h4 className={css`margin-right: 10px;`}>See All</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#63D79C" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </div>
                    </div>

                    <div id="top-contributors-gold">
                        <div className="top-contributor-level">
                            <div className={css`display: flex; align-items: center;`}>
                                <img src="./images/donation/contributor-gold.png" alt="gold" />
                                <h3 className={css`color: #FAE18F; font-size: 22px;`}>Gold</h3>
                            </div>
                            <div className={css`display: flex; align-items: center;`}>
                                <img src="./images/donation/calendar.png" alt="calendar" />
                                <div className={css`line-height: 15px; margin-left: 10px;`}>
                                    <p>Donation</p>
                                    <p>Frequency</p>
                                </div>
                            </div>
                        </div>
                        <div className="top-contributors-line">
                            <p>Central Contra Costa Sanitary District</p>
                            <h4>Daily</h4>
                        </div>
                        <div className="top-contributors-line">
                            <p>Mt Diablo Unified School District</p>
                            <h4>Daily</h4>
                        </div>
                        <div className="top-contributors-line">
                            <p>City of Pleasant Hill/ Civic Action Committee</p>
                            <h4>Weekly</h4>
                        </div>
                        <div className="top-contributors-line">
                            <p>Pleasant Hill Community Foundation</p>
                            <h4>Weekly</h4>
                        </div>

                    </div>

                    <div id="top-contributors-silver">
                        <div className="top-contributor-level">
                            <div className={css`display: flex; align-items: center;`}>
                                <img src="./images/donation/contributor-silver.png" alt="silver" />
                                <h3 className={css`color: #F7F5F0; font-size: 22px;`}>Silver</h3>
                            </div>
                            <div></div>
                        </div>
                        <div className="top-contributors-line">
                            <p>Mt Diablo Unified School District</p>
                            <h4>Bi-Weekly</h4>
                        </div>
                        <div className="top-contributors-line">
                            <p>City of Pleasant Hill/ Civic Action Committee</p>
                            <h4>Monthly</h4>
                        </div>

                    </div>

                    <div id="top-contributors-bronze">
                        <div className="top-contributor-level">
                            <div className={css`display: flex; align-items: center;`}>
                                <img src="./images/donation/contributor-bronze.png" alt="bronze" />
                                <h3 className={css`color: #79725A; font-size: 22px;`}>Bronze</h3>
                            </div>
                            <div></div>
                    </div>
                        <div className="top-contributors-line">
                            <p>Pleasant Hill Community Foundation</p>
                            <h4>Yearly</h4>
                        </div>

                    </div>
                </div>
            </div>*/}

            <div id="donate-materials" className={css`margin: 50px auto;`}>
                <h2>Or Help By Donating</h2>
                <h2>Tools & Materials!</h2>

                <div id="filter-materials" className={css`display: flex; justify-content: space-between; align-items: center; margin: 50px 40px;`}>
                    <div id="filter-materials-buttons" className={css`display: flex; width: 40%;`}>
                        <button onClick={setAll} className='radio-button'>All</button>
                        <button onClick={setMaterials} className='radio-button'>Materials</button>
                        <button onClick={setTools} className='radio-button'>Tools</button>
                        <button onClick={setPlants} className='radio-button'>Plants</button>
                    </div>
                    <form id="filter-materials-search" className={css`display: flex; width: 40%;`} onChange={handleSearch}>
                        <input type="text" placeholder="Search" value={input} onChange={event => setInput(event.target.value)} className='form-input' style={{ width: '100%' }} />
                    </form>
                </div>

                <div id="materials-results" className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;`}>
                    {searchResults.length ? (
                        searchResults.map((result, index) => (
                            <div key={"result-" + index}>
                                <DonateResult name={result.name} subtitle={result.subtitle} picture={result.picture} description={result.description} />
                            </div>
                        ))) : (
                        <p>No results found.</p>
                    )
                    }
                </div>
            </div>

        </section>
    )
};