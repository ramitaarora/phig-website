import './App.css';
import './HujoeStyle.css';
import './ValStyle.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeatherIcon from './components/WeatherIcon';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherIcon />
      <Outlet/>
      <Footer />
      <Credits />
    </div>
  );
}

export default App;
