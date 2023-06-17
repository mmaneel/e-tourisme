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
import ZdestinationList from './containers/admin/ZdestinationList';
import ListUsers from './containers/admin/ListUsers';
import Dashboard from './containers/admin/Dashboard';
import Lieu from './containers/PageLieux/page_lieu'
import Main from './containers/Main';
import Search from './containers/Search'

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
      
        <Route  path="/Login" element={<Login/>} />
        <Route  path="/Register" element={<Register/>} />
        <Route  path="/Favoris" element={<Fav favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        <Route path="/RecVisiteur" element={<RecVisiteur/>} />
        <Route path="/PageActive" element={<PageActive/>} />
        <Route path="/LieuDv" element={<LieuDv addToFavorites={addToFavorites}/>}/>
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/ZdestinationList" element={<ZdestinationList/>} />
        <Route path="/ListUsers" element={<ListUsers/>} />
        <Route path="/Lieu/:id" element={<Lieu/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/search" element={<Search/>} />
       
      
     
      </Routes>
    </div>
    </div>
  );
}

export default App;
