import { css } from '@emotion/css';
import { useEffect } from 'react';

export default function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className={css`text-align: center; padding: 100px;`}>
            <header>
                <h1>Projects</h1>
            </header>
            <main>
                <p>Coming soon!</p>
            </main>
        </div>
    )
}