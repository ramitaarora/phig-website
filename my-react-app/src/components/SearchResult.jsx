import { css } from '@emotion/css'

export default function SearchResult({ result }) {
    return (
        <div id="each-result" className={css`display: flex; width: 600px; margin: 10px; border: 1px solid darkgrey; background: lightgrey;`}>
            <img src="./" alt="result-image" />

            <div id="result-right" className={css`padding: 20px;`}>

                <div id="result-corner" className={css`float: right; margin-left: 20px; height: 70px; width: 130px; display: flex; flex-direction: column; justify-content: space-evenly;`}>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src={result.status === "COMPLETED" ? './images/red-circle.svg' : './images/green-circle.svg'} alt="status" />
                        <p className={css`margin-left: 5px;`}>{result.status}</p>
                    </div>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src="./images/person.svg" alt="place" />
                        <p className={css`margin-left: 5px;`}>{result.place}</p>
                    </div>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src="./images/location.svg" alt="location" />
                        <p className={css`margin-left: 5px;`}>{result.location}</p>
                    </div>
                </div>

                <div id="result-details" className={css`display: flex; flex-direction: column; height: 120%;`}>
                    <h4 className={css`margin-top: 10px;`}>{result.title}</h4>
                    <h5 className={css`margin-top: 10px;`}>{result.time}</h5>
                    <p className={css`margin-top: 10px;`}>{result.description}</p>

                <div id="result-buttons" className={css`margin: 20px auto; width: 100%;  display: flex; justify-content: space-evenly; align-items: center;`}>
                    <button className={css`padding: 5px; color: white; background-color: darkgreen; border: 1px solid darkgreen; border-radius: 5px; cursor: pointer;`}>Apply Now</button>
                    <p>See Details</p>
                </div>

                </div>




            </div>
        </div>
    )
}