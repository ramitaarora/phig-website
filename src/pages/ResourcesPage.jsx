import { Link } from 'react-router-dom';
import Suggestions from '../components/Suggestions';

export default function ResourcesPage() {
    return (
        <div>
            <header>
                <h1>Resources</h1>
                <p>In-depth guides and resources to help you along your journey</p>
            </header>

            <div id="resources">

                <Link>
                    <div id="resource-button">
                        <img src="" alt="websites" />
                        <p>Websites</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="" alt="books-cds" />
                        <p>Books and CD's</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="" alt="classes" />
                        <p>Classes</p>
                    </div>
                </Link>

                <Link>
                    <div id="resource-button">
                        <img src="" alt="nurseries" />
                        <p>Nurseries</p>
                    </div>
                </Link>

            </div>

            <Suggestions />

        </div>
    )
}