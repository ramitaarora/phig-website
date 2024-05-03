import { useState, useEffect } from 'react';
import { css } from '@emotion/css'
import VolunteerResult from '../components/VolunteerResult';
import volunteerOpps from '../data/volunteerOpps.json';

export default function VolunteerPage() {
    const [results, setResults] = useState(volunteerOpps);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (inputValue === '') {
            setResults(volunteerOpps);
        }
    }, [inputValue])

    const handleSearch = (event) => {
        event.preventDefault();
        if (inputValue.length) {
            const newResults = results.filter(result => result.title.toLowerCase().includes(inputValue.toLowerCase()) || result.description.toLowerCase().includes(inputValue.toLowerCase()) || result.place.toLowerCase().includes(inputValue.toLowerCase()) || result.location.toLowerCase().includes(inputValue.toLowerCase()));
            if (newResults.length) {
                setResults(newResults);
            }
            else {
                setResults([])
            }
        } else {
            setResults(volunteerOpps);
        }
    }

    const handleFilter = (event) => {
        if (event.target.name === 'remote-work') {
            if (event.target.checked) {
                const newResults = results.filter(result => result.place === 'Remote');
                console.log(newResults);
                if (newResults.length) {
                    setResults(newResults);
                }
                else {
                    setResults([])
                }
            } else {
                setResults(volunteerOpps);
            }
        }
        if (event.target.name === 'inperson-work') {
            if (event.target.checked) {
                const newResults = results.filter(result => result.place === 'Remote');
                if (newResults.length) {
                    setResults(newResults);
                }
                else {
                    setResults([])
                }
            } else {
                setResults(volunteerOpps);
            }
        }
        if (event.target.name === 'ui-ux') {
            if (event.target.checked) {
                const newResults = results.filter(result => result.title.includes('UX') || result.title.includes('UI'));
                if (newResults.length) {
                    setResults(newResults);
                }
                else {
                    setResults([])
                }      
            } else {
                setResults(volunteerOpps);
            }
        }
        if (event.target.name === 'composter') {
            if (event.target.checked) {
                const newResults = results.filter(result => result.title.toLowerCase().includes('compost') || result.description.toLowerCase().includes('compost'));
                if (newResults.length) {
                    setResults(newResults);
                }
                else {
                    setResults([])
                }      
            } else {
                setResults(volunteerOpps);
            }
        }
        if (event.target.name === 'work-participant') {
            if (event.target.checked) {
                const newResults = results.filter(result => result.title.toLowerCase().includes('work party participant') || result.description.toLowerCase().includes('work party participant'));
                if (newResults.length) {
                    setResults(newResults);
                }
                else {
                    setResults([])
                }      
            } else {
                setResults(volunteerOpps);
            }
        }
    }

    const clearResults = () => {
        setResults(volunteerOpps);
    }

    return (
        <div>

            <header>
                <div id="header-image" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('./images/volunteer/volunteer-header.jpeg'); height: 400px; width: 100vw; background-position: top; background-repeat: no-repeat; background-size: cover;`}>
                    <div id="header-text" className={css`text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; color: white; height: 300px; width: 100vw;`}>
                        <h1>Join Us!</h1>
                        <h2>🌱 Animals need nature, and we need each other 🌿</h2>
                        <p>To protect the future of the world’s ecosystems, we need everyone on board — from governments, to business owners, environmental activists, corporations, and citizens around the world!</p>
                    </div>
                </div>
            </header>

            <main>
                <section id="why-volunteer" className={css`display: flex; justify-content: space-evenly; height: 400px; margin: 100px 100px;`}>
                    <div id="volunteer-left" className={css`display: flex; flex-direction: column; justify-content: space-evenly; padding: 0 50px;`}>
                        <h2>Why volunteer with us?</h2>
                        <p><span>Water Conservation:</span> Contribute to water conservation efforts by learning and implementing eco-friendly watering techniques. Help spread awareness about responsible water usage in gardening.</p>
                        <p><span>Wildlife Protection:</span> Create safe havens for local wildlife by incorporating wildlife-friendly elements into your garden. From pollinator-friendly plants to bird-friendly feeders, be a vital part of nurturing biodiversity.</p>
                        <p><span>Gardening Tips:</span> Share your gardening expertise and tips with a global audience. Help beginners kickstart their green journey and guide seasoned gardeners toward more sustainable practices.</p>
                    </div>
                    <div id="volunteer-right" className={css`height: 100%; object-fit: cover; object-position: center; overflow: hidden;`}>
                        <img src="./images/volunteer/volunteers.png" alt="volunteers" />
                    </div>
                </section>

                <section id="get-involved" className={css`background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('./images/volunteer/volunteer-banner.png'); color: white; padding: 50px; display: flex; flex-direction: column; justify-content: space-between; height: 250px; background-position: center; background-repeat: no-repeat; background-size: cover;`}>
                    <h2>How to Get Involved:</h2>
                    <p>Ready to dig in? Select your favorite cause and let us know how you'd like to contribute. Whether you're a seasoned gardener, a nature enthusiast, or someone eager to make a positive impact, there's a place for you in our community.</p>
                    <p>Let's grow a sustainable future together! 🌍🌻</p>
                </section>

                <section id="search-opportunities" className={css`display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 50px auto;`}>
                    <h2>Search for Opportunities</h2>
                    <form id="search" className={css`display: flex; justify-content: space-evenly; margin: 30px auto; width: 60%; align-items: center;`} onSubmit={handleSearch}>
                        <input type="text" value={inputValue} placeholder="Search by keyword" onChange={event => setInputValue(event.target.value)} className='form-input' style={{ width: '80%'}}/>
                        <input type="submit" className='dark-button'/>
                    </form>
                    <span className='line-break' style={{ width: '70%'}} ></span>

                    <div id="results" className={css`display: flex; justify-content: space-evenly; margin: 30px auto;`}>
                        <form className={css`margin: 0 50px 0 0;`}>
                            <div id="work-format">
                                <h3 className={css`border-bottom: 1px solid lightgrey; margin: 20px 0; padding: 10px 0;`}>Work Format</h3>
                                <div className="volunteer-checkbox">
                                    <input type="checkbox" name="remote-work" onClick={handleFilter}/>
                                    <label htmlFor='remote-work'>Remote Work</label>
                                </div>
                                <div className="volunteer-checkbox">
                                    <input type="checkbox" name="inperson-work" onClick={handleFilter}/>
                                    <label htmlFor='inperson-work'>In-Person Work</label>
                                </div>
                            </div>

                            <div id="activity-type">
                                <h3 className={css`border-bottom: 1px solid lightgrey; margin: 20px 0; padding: 10px 0;`}>Volunteer Activity Type</h3>
                                <div className="volunteer-checkbox">
                                    <input type="checkbox" name="ui-ux" onClick={handleFilter}/>
                                    <label htmlFor='ui-ux'>UI/UX Designer</label>
                                </div>
                                <div className="volunteer-checkbox">
                                    <input type="checkbox" name="composter" onClick={handleFilter}/>
                                    <label htmlFor='composter'>Composter</label>
                                </div>
                                <div className="volunteer-checkbox">
                                    <input type="checkbox" name="work-participant" onClick={handleFilter}/>
                                    <label htmlFor='work-participant'>Work Party Participant</label>
                                </div>
                            </div>

                            <input type="reset" value="Clear Filters" onClick={clearResults} className='dark-button' style={{ margin: '30px 0' }}/>
                        </form>

                        <div id="search-results">
                            <h3>Showing {results.length} Results</h3>
                            <div id="results-container" className={css`width: 800px;`}>

                                {results.map((result, index) =>
                                    <div key={index}>
                                        <VolunteerResult result={result} index={index}/>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}