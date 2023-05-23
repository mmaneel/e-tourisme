import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Login from './Components/AUth/Login';
import Register from './Components/AUth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditPasswd from './Components/EditPasswd/EditPasswd';

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
