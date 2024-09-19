import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Index.js';
import Forms from './pages/Forms/Index.js';
import Emotions from './pages/Emotions/Index.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/emotions" element={<Emotions/>} />
      </Routes>
    </Router>
  );
}

export default App;