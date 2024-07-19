import { Link } from 'react-router-dom';
import Suggestions from '../components/Suggestions';
import { css } from '@emotion/css';
import { useEffect } from 'react';

export default function ResourcesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <header className={css`margin: 100px 5%; text-align: center; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;`}>
                <h1>Resources</h1>
                <p>In-depth guides and resources to help you along your journey</p>
            </header>

            <div id="resources" className={css`margin: 0 5%; display:flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; text-align: center;`}>

                <Link to='/resources/websites' className={css`text-decoration: none; color: inherit; margin: 10px;`}>
                    <div id="resource-button" className="Website_Resourses">
                        <img className="Resources_Img" src="/images/resources/website.png" alt="websites" />
                        <p className="Web" >Websites</p>
                    </div>
                </Link>

                <Link to="/resources/nursery" className={css`text-decoration: none; color: inherit; margin: 10px;`}>
                    <div id="resource-button" className="Nurseries">
                        <img className="Resources_Img" src="/images/resources/plant.png" alt="nurseries" />
                        <p className="Nursery">Nurseries</p>
                    </div>
                </Link>

                <Link to='/resources/books' className={css`text-decoration: none; color: inherit; margin: 10px;`}>
                    <div id="resource-button" className="Book">
                        <img className="Resources_Img" src="/images/resources/book.png" alt="books-cds" />
                        <p className="Books">Books and CD's</p>
                    </div>
                </Link>

                <Link to='/resources/classes' className={css`text-decoration: none; color: inherit; margin: 10px;`}>
                    <div id="resource-button" className="Classes">
                        <img className="Resources_Img" src="/images/resources/class.png" alt="classes" />
                        <p className="Class">Classes</p>
                    </div>
                </Link>

            </div>

            <Suggestions />

        </div>
    )
}