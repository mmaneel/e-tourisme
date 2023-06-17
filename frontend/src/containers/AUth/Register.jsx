import React,{useState,useEffect} from 'react'
import './Login.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import API, { setAuthToken } from './API.jsx';
import { Link } from 'react-router-dom';


function Register(props) {
  const initialeValues={email:"",password:""};
  const[formValues,setFormValues]=useState(initialeValues);
  const[formErrors,setFormErrors]=useState({});
  const[error,setError]=useState();
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
  const navigate = useNavigate();
  // ...

const determineRedirectUrl = async () => {
  try {
    const response = await axios.get('http://localhost:8000/users/api/user-role/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const userRole = response.data.role;
    console.log( userRole)

    if (userRole === 'admin') {
      return '/RecVisiteur';
    } else {
      return '/LieuDv';
    }
  } catch (error) {
    // Handle error
    console.error(error);
    // Return a default redirect URL or an error message
    return '/error-page';
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);

  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
    axios
      .post('http://localhost:8000/users/api/login/', formValues)
      .then((res) => {
        const token = res.data.access;
        setAuthToken(token);
        localStorage.setItem('token', token);

        determineRedirectUrl().then((redirectUrl) => {
          navigate(redirectUrl);
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setError('Invalid username or password.');
          alert('login error');
        } else {
          setError('An error occurred. Please try again later.');
        }
      });
  }
};

// ...


  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email){
      errors.email="Email is required!"
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
    {/*Object.keys(formErrors).length===0 && isSubmit ?(
    <div>Signed in sucessfully</div>
    ):(
      null//<pre>{JSON.stringify(formValues,undefined,2)}</pre>
    )*/}
    
    <form onSubmit={handleSubmit}>
    <ClearIcon   sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "2%"}}/>
    <img src='/LOGO.png' alt="logo" />
    <h2 >Bienvenue  de nouveau </h2>
    <span>Faites entrer votre information pour commencer ! </span>
    
      <div className='input-info'>
      <label >Email</label>
    <input 
       name="email"
       value={formValues.email}
       type="text"
       placeholder='example@gmail.com'
       onChange={handlechange}/>
       <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.email}</p>
      </div>
      
<div className='input-info'>
<label >Password</label>
    <input 
     name ="password"
    value={formValues.password} 
    type={passwordType} 
    placeholder='******'
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
      <a style={{fontSize:'8px',textAlign:'right',paddingRight:'10px'}}><Link style={{ color: '#484646' }}  to ="/Forgetpasswd">Mot de pass oublié</Link></a>
    <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.password}</p>
    
</div>
{error && <p>{error}</p>} {/* Display the error message */}
    <button className='btn-inscrire' type='submit'>Connecter
    </button>
    <button className='btn-link'><Link  className='link-style style1' to ="/Login">Vous n' avez pas un compte ? S'inscrire</Link></button>
  </form>
  
  </div>
  </>
  )
}

export default Register