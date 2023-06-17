import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link,Switch } from 'react-router-dom';
import Login from './containers/AUth/Login';
import ReactDOM from 'react-dom';
import Register from './containers/AUth/Register';
import EditPasswd from './containers/Passwd/EditPasswd';
import LieuDv from './containers/Recommended-Visiteur/LieuDv';
import RecVisiteur from './containers/Recommended-Visiteur/RecVisiteur';
import Forgetpasswd from './containers/Passwd/Forgetpasswd';
import Favoris from './containers/Favoris/Favoris';
import PageActive from './containers/Recommended-Visiteur/PageActive';
import Fav from './containers/Recommended-Visiteur/Fav';
import Lieu from './containers/PageLieux/page_lieu';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (favori) => {
    setFavorites((prevFavorites) => [...prevFavorites, favori]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favori) => favori.id !== id));
  };

  return (
    <div className="App">
     <div>
      <Routes>
      
        <Route  path="/" element={<Login/>} />
        <Route  path="/Register" element={<Register/>} />
        <Route  path="/Favoris" element={<Fav favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        <Route path="/RecVisiteur" element={<RecVisiteur/>} />
        <Route path="/PageActive" element={<PageActive/>} />
        <Route path="/LieuDv" element={<LieuDv addToFavorites={addToFavorites}/>}/>
        <Route path="/Lieu/:id" element={<Lieu />} />

      
     
      </Routes>
    </div>
    </div>
  );
}

export default App;
