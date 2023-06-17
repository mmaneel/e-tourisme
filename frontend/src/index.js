import React,{useState} from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import LieuDv from './containers/Recommended-Visiteur/LieuDv';
import Register from './containers/AUth/Register';
import Login from './containers/AUth/Login';
import Forgetpasswd from './containers/Passwd/Forgetpasswd';
import RecVisiteur from './containers/Recommended-Visiteur/RecVisiteur';
import Favoris from './containers/Favoris/Favoris';
import PageActive from './containers/Recommended-Visiteur/PageActive';
import Compte from './containers/Passwd/Compte';
import EditPasswd from './containers/Passwd/EditPasswd';
import ListP from './containers/Passwd/ListP';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
    <Router>
       
           <App />
      
    </Router>
   
  
);
reportWebVitals();
