import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Login from './containers/AUth/Login';
import Register from './containers/AUth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditPasswd from './containers/EditPasswd/EditPasswd';

function App() {
  const[currentForm,setCurrentForm]= useState('Login')
  const toggleform=(formName)=>{
    setCurrentForm(formName)

  }
  return (
    <div className="App">
       
      {currentForm === "Login" ?<Login onFormSwitch={toggleform}/>:<Register onFormSwitch={toggleform}/>}
      {/*<EditPasswd/>*/}

      
    </div>
  );
}

export default App;
