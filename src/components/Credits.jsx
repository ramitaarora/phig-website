import { css } from '@emotion/css';

export default function Credits() {
    return (
        <section id="credits" className={css`width: 100%; background-color: var(--secondary); color: var(--tertiary); text-align: center; padding: 10px; cursor: pointer;`}>
        <a href="https://github.com/ramitaarora/phig-website" target="_blank" rel="noreferrer" className={css`text-decoration: none; color: var(--tertiary); &:hover { color: var(--radio-button); }`}>
            <p className={css`font-size: 12px;`}>This website was built by PHIG Volunteers: Matthew Pittman (Designer), Ramita Indurkhya (Developer), Hujoe Selvan (Developer) and Valdrin Jonuzi (Developer)</p>
            </a>
        </section>
    )
}