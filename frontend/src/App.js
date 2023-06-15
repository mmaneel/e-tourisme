import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Login from './containers/AUth/Login';
import Register from './containers/AUth/Register';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import EditPasswd from './containers/Passwd/EditPasswd';
import LieuDv from './containers/Recommended-Visiteur/LieuDv';
import RecVisiteur from './containers/Recommended-Visiteur/RecVisiteur';
import Forgetpasswd from './containers/Passwd/Forgetpasswd';


function App() {
  

  const[currentForm,setCurrentForm]= useState('Login')
  const toggleform=(formName)=>{
    setCurrentForm(formName)

  }
  return (
    <div className="App">
     <Routes>
        
        <Route exact path="/" element={<Login/>}/>
        
     
    </Routes>
    
      
      
    </div>
  );
}

export default App;
