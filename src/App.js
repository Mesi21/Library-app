import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={} />
        <Route exact path="/categories" element={} />
      </Routes>
    </Router>
  );
}

export default App;
