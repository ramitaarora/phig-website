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
            setPlantHeight('500')
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
            setSearchResults(donations.filter(result => result.name.toLowerCase().includes(input.toLowerCase()) || result.type.toLowerCase().includes(input.toLowerCase()) ));
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
            <header className={css`height: 400px; width: 100%; background-color: #081821; color: white; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 60px; margin-bottom: 30px;`}>
                <h1 className={css`position: relative; top: -50px;`}>Donate and watch your PHIG tree grow!</h1>
                <p className={css`position: relative; top: -50px;`}>Our volunteer team is growing every day and helping you learn ways to keep our planet healthy. Plant with us and track our progress!</p>
            </header>

            <div id="quick-donate" className={css`border-radius: 50% 50% 0 0; display: flex; justify-content: space-evenly; border-radius: 20% 20% 0 0; position: relative; top: -105px; background-color: white; height: 500px;`}>
                {/*<div id="quick-donate-image">*/}
                    {/*<div id="tag" className={css`background-color: darkgreen; color: white; padding: 10px 15px; border-radius: 10px; position: relative; left: -250px; top: 35px; transform: rotate(350deg); text-align: center; width: fit-content;`}>
                        <p>$10 donated =</p>
                        <p>1 new stage</p>
                    </div>*/}
                    <div className={css`display: flex; align-items: flex-end; justify-content: center; height: 100%; width: 30%;`}>
                        <img src={`./images/donation/plant-growth-${plantGrowth}.png`} className={css`height: ${plantHeight}px;`} alt="seed-grows" loading="lazy" />
                    {/*</div>*/}
                </div>
                <form id="quick-donate-form" className={css`padding: 20px; border: 1px solid lightgrey; border-radius: 15px; box-shadow: 0px 5px 10px lightgrey; text-align: center; position: relative; top: -20px; background-color: white; width: 400px; height: 100%;`}>
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
                    <Link to="/pay"><input type="submit" value="Next" className='green-button' style={{ margin: '30px auto 0 auto' }} /></Link>
                </form>
            </div>

            <div id="other-donations" className={css`padding: 0 50px; background-color: white; margin-top: 0;`}>
                <div id="other-donations-container" className={css`background-color: #E9FEFF; width: 60%; margin: 0 auto;`}>
                    <h2 className={css`text-align: center; border-bottom: 1px solid lightgrey; padding: 20px;`}>Other Ways to Give</h2>

                    <div id="contact-container" className={css`display: flex; justify-content: space-evenly;`}>
                        <div id="other-left" className={css`display: flex; width: 50%; padding: 50px; border-right: 1px solid lightgrey;`}>
                            <div id="left-image" className={css`margin: 0 20px 0 50px;`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="black" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </div>
                            <div id="left-text">
                                <p className={css`margin-bottom: 20px;`}>PHIG (Pleasant Hill Instructional Garden)</p>
                                <p>P.O.Box 23454, Pleasant Hill, CA 94523</p>
                            </div>
                        </div>
                        <div id="other-right" className={css`display: flex; width: 50%; padding: 50px;`}>
                            <div id="right-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="black" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div id="right-text" className={css`margin: 0 50px 0 20px;`}>
                                <p className={css`margin-bottom: 20px;`}>(925) 482-6670</p>
                                <p>Monday-Friday</p>
                                <p>9am-7pm ET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                        <input type="text" placeholder="Search" value={input} onChange={event => setInput(event.target.value)} className='form-input' style={{ width: '100%'}}/>
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