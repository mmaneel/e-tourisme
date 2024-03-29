import React,{useState,useEffect} from 'react'
import './Login.css'
import { useNavigate, NavLink, Link } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';


function Login(props) {
  const initialeValues={name:"",email:"",password:""};
  const[formValues,setFormValues]=useState(initialeValues);
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handlechange=(e)=>{
    const {name,value}=e.target;
    setFormValues({ ...formValues,[name]:value});
    //console.log(formValues)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
     axios.post('http://localhost:8000/users/api/register/', formValues)
     .then((response) => {
      // Gérer la réponse du serveur après la connexion réussie
      console.log(response.data);
        //alert(res.data.message);
        //setUserState(res.data.formValues);
        //navigate("/", { replace: true });
      })
      .catch((error) => {
        // Gérer les erreurs lors de l'inscription
        console.error(error);})
    }
    
  };

  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email){
      errors.email="L'e-mail est requis !"
    }else if (!regex.test(values.email)){
      errors.email="This is not a valid email format"
    }
    if(!values.password){
      errors.password="Password is required!"
    }else if (values.password.length<4){
      errors.password="Password must be more than 4characters"

    }
    return errors;
  };

  /*const[email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email)  
  }*/

  return (
    <>
    <div className='container-log'>
    {Object.keys(formErrors).length===0 && isSubmit ?(
    <div>Signed in sucessfully</div>
    ):(
      null//<pre>{JSON.stringify(formValues,undefined,2)}</pre>
    )}
    
    <form onSubmit={handleSubmit}>
    <ClearIcon   sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "2%"}}/>
    <img src='/LOGO.png' alt="logo" />
    <h2 >Bienvenue  à  ZDestination </h2>
    <span>Créez un compte, une experience exptionnelle vous attend ! </span>
    <div className='input-info'>
      <label >Name</label>
    <input 
       name="name"
       value={formValues.name}
       type="text"
       placeholder='name'
       onChange={handlechange}/>
      </div>
      <div className='input-info'>
      <label >Email</label>
    <input 
       name="email"
       value={formValues.Loginemail}
       type="text"
       placeholder='example@gmail.com'
       onChange={handlechange}/>
       <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.email}</p>
      </div>
    
<div className='input-info'>
<label >Mot de passe</label>
    <input 
     name ="password"
    value={formValues.password} 
    type={passwordType} 
    placeholder='************'
    onChange={handlechange}/>
    <a className='btn-visibility' onClick={togglePassword}>
    {passwordType === "password" ? (
    <VisibilityIcon 
         sx={{ fontSize: "18px", marginTop: "5px", color: "#000" ,}}/>
    ) : (
      <VisibilityOffIcon
        sx={{ fontSize: "18px", marginTop: "5px", color: "#000" ,}}
      />
    )}
      </a>
    <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.password}</p>
    
</div>
    
    <button className='btn-inscrire' type='submit'>S'inscrire</button>
    <button className='btn-link' ><Link className='link-style' to ="/Register">Vous avez déja un compte ? Se connecter</Link></button>
  </form>
  
  </div>
  </>
  )
}

export default Login