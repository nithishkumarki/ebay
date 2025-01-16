import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import ActionFigures from './components/ActionFigures.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Banner/>
       <ActionFigures/>
       <ActionFigures/>
       <ActionFigures/>
    </div>
  );
}

export default App;
