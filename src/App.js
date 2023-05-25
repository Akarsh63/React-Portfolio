import './App.css';
import React from 'react';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './Components/Footer'
import Scrolltop from './Components/Scrolltop';

function App() {
  
  return (
    <div className="App">
      <Router>
            <Header />
            <Scrolltop />
            <Routes>
              <Route path='/' element={<Home/>} />

              <Route path='/about' element={<About />}/>
                  
              <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
      </Router>
        

    </div>
  );
}

export default App;
