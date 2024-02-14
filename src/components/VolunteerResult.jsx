import { css } from '@emotion/css'

export default function VolunteerResult({ result, index }) {
    return (
        <div id={"each-result-" + index} className={css`display: flex; height: 250px; width: 700px; margin: 10px; background: lightgrey;`}>

            <div id="result-img-container" className={css`height: 100%; width: 35%; object-fit: cover; object-position: center; overflow: hidden;`}>
                <img src={result.image} alt="result-image" />
            </div>


            <div id="result-right" className={css`padding: 20px; width: 65%; height: 100%;`}>

                <div id="result-corner" className={css`float: right; margin: 0 20px; height: 70px; width: 25%; display: flex; flex-direction: column; justify-content: space-evenly;`}>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src={result.status === "COMPLETED" ? './images/volunteer/red-circle.svg' : './images/volunteer/green-circle.svg'} alt="status" />
                        <p className={css`margin-left: 5px;`}>{result.status}</p>
                    </div>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src="./images/volunteer/person.svg" alt="place" />
                        <p className={css`margin-left: 5px;`}>{result.place}</p>
                    </div>
                    <div id="each-corner-stat" className={css`display: flex; justify-content: flex-start; align-items: center;`}>
                        <img src="./images/volunteer/location.svg" alt="location" />
                        <p className={css`margin-left: 5px;`}>{result.location}</p>
                    </div>
                </div>

                <div id="result-middle" className={css`height: 100%; display: flex; flex-direction: column; justify-content: center;`}>
                    <div id="result-details" className={css`display: flex; flex-direction: column; height: fit-content;`}>
                        <h4 className={css`margin-top: 10px;`}>{result.title}</h4>
                        <h5 className={css`margin-top: 10px;`}>{result.time}</h5>
                        <p className={css`margin-top: 10px; font-size: 80%;`}>{result.description}</p>
                    </div>
                    <div id="result-buttons" className={css`margin: 20px auto; width: 75%;  display: flex; justify-content: space-evenly; align-items: center;`}>
                        <button className={css`padding: 5px; color: white; background-color: darkgreen; border: 1px solid darkgreen; border-radius: 5px; cursor: pointer;`}>Apply Now</button>
                        <p>See Details</p>
                    </div>

                </div>




            </div>
        </div>
    )
}