import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';

import Banner1 from './components/Banner1.js';
import Banner2 from './components/Banner2.js';


import ActionFigures from './components/ActionFigures.js';
import TrendOnEbay from './components/TrendOnEbay.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Banner1/>
       <ActionFigures/>
       <ActionFigures/>
       <ActionFigures/>
        <TrendOnEbay/>
       <Banner2/>
       <Banner2/>
       <Footer/>

 
    </div>
  );
}

export default App;
