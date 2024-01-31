import { css } from '@emotion/css';

export default function DonationPage() {
    return (
        <section id="donation-page">
            <header className={css`height: 400px; width: 100%; background-color: #081821; color: white; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 60px; margin-bottom: 30px;`}>
                <h1>Donate and watch your PHIG tree grow!</h1>
                <p>Our volunteer team is growing every day and helping you learn ways to keep our planet healthy. Plant with us and track our progress!</p>
            </header>

            <div id="quick-donate" className={css`border-radius: 50% 50% 0 0; display: flex; justify-content: space-evenly; border-radius: 20% 20% 0 0; position: relative; top: -105px; background-color: white;`}>
                <div id="quick-donate-image">
                    <img src="./" alt="" />
                    <p>placeholder</p>
                </div>
                <form id="quick-donate-form" className={css`padding: 20px; border: 1px solid lightgrey; border-radius: 15px; box-shadow: 5px 5px 5px lightgrey; text-align: center; position: relative; top: -20px; background-color: white;`}>
                    <h2 className={css`margin: 10px;`}>Join #PHIG</h2>
                    <div id="quick-form-buttons" className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center;`}>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$1</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$5</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$10</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$20</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$25</button>
                        <button className={css`width: 45%; border: 1px solid lightgrey; padding: 10px 15px; margin: 10px 0; border-radius: 3px;`}>$50</button>
                    </div>
                    <input type="number" placeholder='Custom amount' className={css`width: 94%; border: 1px solid lightgrey; padding: 10px 15px; border-radius: 3px;`}/>
                    <input type="submit" value="Next" className={css`width: 94%; border: 1px solid lightgrey; padding: 10px 15px; border-radius: 10px; margin: 20px auto; background-color: darkgreen; color: white;`}/>
                </form>
            </div>

            <div id="other-donations">
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