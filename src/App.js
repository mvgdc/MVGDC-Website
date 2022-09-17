import React, { SafeAreaView } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Team from './Pages/Team';
import Resources from './Pages/Resources';
import './App.css'
function App() {
  return (
    <div className="main">
      <Router >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
      
    
  );
}

export default App;
