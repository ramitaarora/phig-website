import { css } from '@emotion/css'
import { Link } from 'react-router-dom';

export default function VolunteerResult({ result, index }) {
    return (
        <div id={"each-result-" + index} className={css`display: flex; align-items: center; width: 100%; height: 250px; margin: 10px; border: 1px solid lightgrey; border-radius: 20px; @media (max-width: 700px) { flex-direction: column; height: fit-content; }`}>

        <img src={result.image} alt="result" loading="lazy" className={css`height: 100%; width: 35%; object-fit: cover; object-position: center; overflow: hidden; @media (max-width: 700px) { width: 50%; } @media (max-width: 550px) { width: 100%; } `}/>


            <div id="result-right" className={css`padding: 20px 30px; width: 65%; height: 100%; @media (max-width: 700px) { width: 100%; }`}>

                <div id="result-corner" className={css`float: right; margin: 0 20px; height: 110px; width: 25%; display: flex; flex-direction: column; justify-content: space-evenly; font-size: 12px; `}>
                    <div id="each-corner-stat">
                        <img src={result.status === "COMPLETED" ? './images/volunteer/red-circle.svg' : './images/volunteer/green-circle.svg'} alt="status-dot" />
                        <p>{result.status}</p>
                    </div>
                    <div id="each-corner-stat">
                        <img src="./images/volunteer/person.svg" alt="place" />
                        <p>{result.place}</p>
                    </div>
                    <div id="each-corner-stat">
                        <img src="./images/volunteer/location.svg" alt="location" />
                        <p>{result.location}</p>
                    </div>
                </div>

                <div id="result-middle" className={css`height: 100%; display: flex; flex-direction: column; justify-content: center;`}>
                    <div id="result-details" className={css`display: flex; flex-direction: column; height: fit-content;`}>
                        <h4 className={css`margin-top: 10px;`}>{result.title}</h4>
                        <h5 className={css`margin-top: 10px; font-size: 14px;`}>{result.time}</h5>
                        <p className={css`margin-top: 10px; font-size: 80%; font-size: 12px;`}>{result.description}</p>
                    </div>
                    <div id="result-buttons" className={css`margin: 20px auto; width: 75%;  display: flex; justify-content: space-evenly; align-items: center;`}>
                        <Link to="/volunteer/application"><button className="green-button">Apply Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}