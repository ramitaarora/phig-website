import { css } from '@emotion/css';

export default function DonationPage() {
    return (
        <section id="donation-page">
            <header>
            </header>

            <div id="quick-donate">
                <div id="quick-donate-image">
                </div>
                <form id="quick-donate-form">
                    <h2>Join #PHIG</h2>
                    <div id="quick-form-buttons">
                        <button>$1</button>
                        <button>$5</button>
                        <button>$10</button>
                        <button>$20</button>
                        <button>$25</button>
                        <button>$50</button>
                    </div>
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