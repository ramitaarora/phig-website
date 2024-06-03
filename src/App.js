import './App.css';
import './HujoeStyle.css';
import './ValStyle.css';
import './WilliamStyle.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeatherIcon from './components/WeatherIcon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherIcon />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
