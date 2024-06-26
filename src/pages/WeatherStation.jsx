import { useEffect } from "react";

export default function WeatherStation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="weather-station">
            <iframe
                src="https://phigstation.streamlit.app/?embed=true"
                title="PHIG weather station"
                className="weather-station"
            ></iframe>
        </div>
    )
}