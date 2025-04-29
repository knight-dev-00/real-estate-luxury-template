import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HomePage from './components/home';
import Condos from './components/condos';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/condos' element={<Condos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
