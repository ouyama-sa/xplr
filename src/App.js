import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Destinations from './components/pages/Destinations';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


