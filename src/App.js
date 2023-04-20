import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

// Route Components
import Main from './components/Main';
import Pokemon from './components/Pokemon';

// Styles
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </div>
  </Router>
);


export default App;
