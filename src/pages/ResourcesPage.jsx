import { Link } from 'react-router-dom';
import Suggestions from '../components/Suggestions';
import { css } from '@emotion/css';

export default function ResourcesPage() {
    return (
        <div>
            <header className={css`margin-top: 100px; text-align: center; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;`}>
                <h1>Resources</h1>
                <p>In-depth guides and resources to help you along your journey</p>
            </header>

            <div id="resources" className={css`display:flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; text-align: center;`}>

                <Link to='/resources/websites'>
                    <div id="resource-button">
                        <img src="/images/resources/website.png" alt="websites" />
                        <p>Websites</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="/images/resources/book.png" alt="books-cds" />
                        <p>Books and CD's</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="/images/resources/class.png" alt="classes" />
                        <p>Classes</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="/images/resources/plant.png" alt="nurseries" />
                        <p>Nurseries</p>
                    </div>
                </Link>

            </div>

            <Suggestions />

        </div>
    )
}