import { css } from '@emotion/css';

export default function DonationPage() {
    return (
        <section id="donation-page" className={css`background-color: white;`}>
            <header className={css`height: 400px; width: 100%; background-color: #081821; color: white; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 60px; margin-bottom: 30px;`}>
                <h1>Donate and watch your PHIG tree grow!</h1>
                <p>Our volunteer team is growing every day and helping you learn ways to keep our planet healthy. Plant with us and track our progress!</p>
            </header>

            <div id="quick-donate" className={css`border-radius: 50% 50% 0 0; display: flex; justify-content: space-evenly; border-radius: 20% 20% 0 0; position: relative; top: -105px; background-color: white;`}>
                <div id="quick-donate-image">
                    <div id="tag" className={css`background-color: darkgreen; color: white; padding: 10px 15px; border-radius: 10px; position: relative; left: -250px; top: 30px; transform: rotate(350deg);`}>
                        <p>$10 donated =</p>
                        <p>1 new stage</p>
                    </div>
                    <img src="./images/seed-grows.png" alt="seed-grows" className={css`height: 200px; margin-top: 150px;`}/>
                </div>
                <form id="quick-donate-form" className={css`padding: 20px; border: 1px solid lightgrey; border-radius: 15px; box-shadow: 5px 5px 10px lightgrey; text-align: center; position: relative; top: -20px; background-color: white;`}>
                    <h2 className={css`margin: 10px;`}>Join #PHIG</h2>
                    <div id="quick-form-buttons" className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center;`}>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$1</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$5</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$10</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$20</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$25</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$50</button>
                    </div>
                    <input type="number" placeholder='Custom amount' className={css`width: 94%; border: 1px solid lightgrey; padding: 10px 15px; border-radius: 3px;`} />
                    <input type="submit" value="Next" className={css`width: 94%; border: 1px solid lightgrey; padding: 10px 15px; border-radius: 10px; margin: 20px auto; background-color: darkgreen; color: white;`} />
                </form>
            </div>

            <div id="other-donations" className={css`padding: 50px; background-color: white;`}>
                <div id="other-donations-container" className={css`background-color: #E9FEFF; width: 60%; margin: 0 auto;`}>
                    <h2 className={css`text-align: center; border-bottom: 1px solid lightgrey; padding: 20px;`}>Other Ways to Give</h2>

                    <div id="contact-container" className={css`display: flex; justify-content: space-evenly;`}>
                        <div id="other-left" className={css`display: flex; width: 50%; padding: 50px; border-right: 1px solid lightgrey;`}>
                            <div id="left-image" className={css`margin: 0 20px 0 50px;`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
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

            <div id="donate-materials">
                <h2>Or Help By Donating Tools & Materials!</h2>

                <div id="filter-materials">
                    <div id="filter-materials-buttons">
                        <button>All</button>
                        <button>Materials</button>
                        <button>Tools</button>
                        <button>Price</button>
                    </div>
                    <form id="filter-materials-search">
                        <input type="text" placeholder="Search" />
                        <input type="submit" />
                    </form>
                </div>

                <div id="materials-results">
                </div>
            </div>

        </section>
    )
};