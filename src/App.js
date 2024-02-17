import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
