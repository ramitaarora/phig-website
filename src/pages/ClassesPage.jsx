import { css } from '@emotion/css';
import { useEffect } from 'react';

export default function ClassesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className={css`text-align: center; padding: 100px;`}>
            <header>
                <h1>Classes</h1>
            </header>
            <main>
                <p>Coming soon!</p>
            </main>
        </div>
    )
}