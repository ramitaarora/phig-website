import { css } from '@emotion/css';

export default function Credits() {
    return (
        <section id="credits" className={css`width: 100%; background-color: var(--secondary); color: var(--tertiary); text-align: center; padding: 10px;`}>
            <p className={css`font-size: 12px;`}>This website was built by PHIG Volunteers: Matthew Pittman (Designer), Ramita Indurkhya (Developer), Hujoe Selvan (Developer) and Valdrin Jonuzi (Developer)</p>
        </section>
    )
}