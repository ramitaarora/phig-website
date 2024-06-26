import {css} from '@emotion/css';
import { useEffect } from 'react';

export default function EventsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className={css`padding: 5%;`}>
            <header className={css`text-align: center;`}>
                <h1>Events</h1>
            </header>
            <main className={css`display: flex; justify-content: center; align-items: center;`}>
                <iframe src="https://calendar.google.com/calendar/embed?src=cd76b788532cd418c6d91e0b694d6aaffe92a7683773fb79b0b02fd4c3593a8b%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no" title="PHIG Events Calendar"></iframe>
            </main>
        </div>
    )
}