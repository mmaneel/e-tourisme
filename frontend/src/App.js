import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Login from './containers/AUth/Login';
import Register from './containers/AUth/Register';
import EditPasswd from './containers/Passwd/EditPasswd';
import LieuDv from './containers/Recommended-Visiteur/LieuDv';
import RecVisiteur from './containers/Recommended-Visiteur/RecVisiteur';
import Forgetpasswd from './containers/Passwd/Forgetpasswd';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login/> }/>
          <Route path="/register" element={<Register />} />
          <Route path="/lieuDv" element={<LieuDv />} />
          <Route path="/recvisiteur" element={<RecVisiteur />} />
          <Route path="/forgetpasswd" element={<Forgetpasswd />} />
          {/* Add more routes for other components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
