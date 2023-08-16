import Homeimg from './Components/Homeimg';
import NavBar from './Components/NavBar';
import DailyDeal from './Components/DailyDeal';
import './App.css';
import Ourblog from './Components/Ourblog';
import Footer from './Components/Footer'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Homeimg />
      <DailyDeal />
      <Ourblog />
      <Footer />
    </div>
  );
}

export default App;
