import React,{useState,useEffect} from 'react'
import './Login.css'
import { useNavigate, NavLink } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';


function Register(props) {
  const initialeValues={email:"",password:""};
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
  }
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
     /* axios.post("", formValues).then((res) => {
        alert(res.data.message);
        setUserState(res.data.formValues);
        navigate("/", { replace: true });
      });*/
    }
    
  },[formErrors]);

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
    {Object.keys(formErrors).length===0 && isSubmit ?(
    <div>Signed in sucessfully</div>
    ):(
      null//<pre>{JSON.stringify(formValues,undefined,2)}</pre>
    )}
    
    <form onSubmit={handleSubmit}>
    <ClearIcon   sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "2%"}}/>
    <img src='/LOGO.png' alt="logo" />
    <h2 >Bienvenue  de nouveau </h2>
    <span>Faites entrer votre information pour commencer ! </span>
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
      <a style={{ color: '#484646' , fontSize:'8px',textAlign:'right',paddingRight:'10px'}}>Mot de pass oublié</a>
    <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.password}</p>
    
</div>
    
    <button className='btn-inscrire' type='submit'>Connecter</button>
    <button className='btn-link' onClick={()=>props.onFormSwitch('Login')}>Vous n' avez pas un compte ? S'inscrire</button>
  </form>
  
  </div>
  </>
  )
}

export default Register