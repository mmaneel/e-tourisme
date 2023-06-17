import React,{useState,useEffect} from 'react'
import './Register.css'
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
      return '/Dashboard';
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
    <div className="font-jost flex flex-col items-center justify-center h-[100vh] max-w-[500px] w-full m-auto">
    
    
    <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-between w-70  rounded-2xl bg-white py-6 px-8">
    <ClearIcon  onClick={props.handle} className="text-xl ml-auto mt-2" />
    <img src='/LOGO.png' alt="logo" className="w-14 h-14"/>
    <h2 className="text-2xl font-bold text-[#162641] mt-4">Bienvenue  de nouveau </h2>
    <span className="text-xs text-[#162641] mt-[2px] mb-8">
      Faites entrer votre information pour commencer ! 
    </span>
    <div className="w-full relative">
      <label className="text-[#50504F]">Email</label>
    <input 
       name="email"
       value={formValues.email}
       type="text"
       placeholder='example@gmail.com'
       onChange={handlechange}
       className=" rounded-2xl py-1 px-4  w-full bg-[#F6F2E6] text-gray-600"
       />
         {!formErrors.email && (
              <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.email}</p>
            )}
      </div>
      
<div className="relative mt-2">
<label className="text-[#50504F]">Mot de passe</label>
    <input 
     name ="password"
    value={formValues.password} 
    type={passwordType} 
    placeholder='******'
    onChange={handlechange}
    className=" rounded-2xl py-1 px-4 w-full bg-[#F6F2E6] text-gray-600"
    />
    <a className="absolute bg-transparent left-[90%] top-[42%]" onClick={togglePassword}>
    {passwordType === "password" ? (
                                      <VisibilityIcon className="text-lg mt-1 text-black"/>
                                   ) 
                                 : (
                                        <VisibilityOffIcon className="text-lg mt-1 text-black"/>
                                   )
    }
   </a>
   <a style={{fontSize:'8px',textAlign:'right',paddingRight:'10px'}}><Link style={{ color: '#484646' }}  to ="/Forgetpasswd">Mot de pass oublié</Link></a>
   {!formErrors.password && (
              <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.password}</p>
            )}
    
</div>
{/*Object.keys(formErrors).length===0 && isSubmit ?(
    <div>Signed in sucessfully</div>
    ):(
      null//<pre>{JSON.stringify(formValues,undefined,2)}</pre>
    )*/}
    
    <button onClick={props.handleConnectClick} className="text-[#162641] px-6 py-1 bg-[#C1DCAB] border-none w-auto h-auto text-lg rounded-2xl font-semibold mt-6" type='submit'>
        Connecter
    </button>
    <button  className="border-none bg-transparent text-sm pt-4 text-[#162641] " onClick={props.handleSinscr}>
      Vous n'avez pas un compte ? 
      <p className='hover:text-blue-400 text-xs hover:underline'>S'inscrire</p></button>
  </form>
  
  </div>
  </>
  )
}

export default Register