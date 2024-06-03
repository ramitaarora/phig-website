export default function WeatherStation() {
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