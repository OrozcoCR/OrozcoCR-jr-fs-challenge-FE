import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddUrl,Home } from './pages';
import { Navbar,Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUrl/>}/>
        </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
