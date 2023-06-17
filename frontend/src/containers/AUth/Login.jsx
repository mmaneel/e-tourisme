// import React,{useState,useEffect} from 'react'
// import './Login.css'
// import { useNavigate, NavLink, Link } from "react-router-dom";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ClearIcon from '@mui/icons-material/Clear';


// function Login(props) {
//   const initialeValues={email:"",password:""};
//   const[formValues,setFormValues]=useState(initialeValues);
//   const[formErrors,setFormErrors]=useState({});
//   const[isSubmit,setIsSubmit]=useState(false);
//   const [passwordType, setPasswordType] = useState("password");

//   const togglePassword = () => {
//     setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
//   };

//   const handlechange=(e)=>{
//     const {name,value}=e.target;
//     setFormValues({ ...formValues,[name]:value});
//     //console.log(formValues)
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true)
//   }
//   useEffect(()=>{
//     console.log(formErrors)
//     if(Object.keys(formErrors).length===0 && isSubmit){
//       console.log(formValues);
//      /* axios.post("", formValues).then((res) => {
//         alert(res.data.message);
//         setUserState(res.data.formValues);
//         navigate("/", { replace: true });
//       });*/
//     }
    
//   },[formErrors]);

//   const validate=(values)=>{
//     const errors={}
//     const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if(!values.email){
//       errors.email="L'e-mail est requis !"
//     }else if (!regex.test(values.email)){
//       errors.email="This is not a valid email format"
//     }
//     if(!values.password){
//       errors.password="Password is required!"
//     }else if (values.password.length<4){
//       errors.password="Password must be more than 4characters"

//     }
//     return errors;
//   };

//   /*const[email,setEmail]=useState('')
//   const [pass,setPass]=useState('')
  
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(email)  
//   }*/

//   return (
//     <>
//     <div className='container-log'>
//     {Object.keys(formErrors).length===0 && isSubmit ?(
//     <div>Signed in sucessfully</div>
//     ):(
//       null//<pre>{JSON.stringify(formValues,undefined,2)}</pre>
//     )}
    
//     <form onSubmit={handleSubmit}>
//     <ClearIcon  onClick={props.handle} sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "2%"}}/>
//     <img src='/LOGO.png' alt="logo" />
//     <h2 >Bienvenue  à  ZDestination </h2>
//     <span>Créez un compte, une experience exptionnelle vous attend ! </span>
//       <div className='input-info'>
//       <label >Email</label>
//     <input 
//        name="email"
//        value={formValues.Loginemail}
//        type="text"
//        placeholder='example@gmail.com'
//        onChange={handlechange}/>
//        <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.email}</p>
//       </div>
    
// <div className='input-info'>
// <label >Mot de passe</label>
//     <input 
//      name ="password"
//     value={formValues.password} 
//     type={passwordType} 
//     placeholder='************'
//     onChange={handlechange}/>
//     <a className='btn-visibility' onClick={togglePassword}>
//     {passwordType === "password" ? (
//     <VisibilityIcon 
//          sx={{ fontSize: "18px", marginTop: "5px", color: "#000" ,}}/>
//     ) : (
//       <VisibilityOffIcon
//         sx={{ fontSize: "18px", marginTop: "5px", color: "#000" ,}}
//       />
//     )}
//       </a>
//     <p style={{ color: 'red' , fontSize:'12px'}}>{formErrors.password}</p>
    
// </div>
    
//     <button className='btn-inscrire' type='submit'><Link className='link-style' to ="/LieuDV ">S'inscrire</Link></button>
//     <button className='btn-link' onClick={props.handleCon}>Vous avez déja un compte ? Se connecter</button>
//   </form>
  
//   </div>
//   </>
//   )
// }

// export default Login
import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';

function Login(props) {
  const initialValues = { name:'',email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      /* axios.post("", formValues).then((res) => {
        alert(res.data.message);
        setUserState(res.data.formValues);
        navigate("/", { replace: true });
      });*/
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "L'e-mail est requis !";
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }
    return errors;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh] max-w-[500px] w-full m-auto">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>Signed in successfully</div>
        ) : null}
        <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-between w-70  rounded-2xl bg-white py-6 px-8">
          <ClearIcon onClick={props.handle} className="text-xl ml-auto mt-2" />
          <img src="/LOGO.png" alt="logo" className="w-14 h-14" />
          <h2 className="text-2xl font-bold text-[#162641] mt-4">Bienvenue à ZDestination</h2>
          <span className="text-xs text-[#162641] mt-[2px] mb-8">
            Créez un compte, une expérience exceptionnelle vous attend!
          </span>
          <div className="w-full relative">
            <label className="text-[#50504F]">Nom </label>
            <input
              name="name"
              value={formValues.name}
              type="text"
              placeholder="Nom"
              onChange={handleChange}
              className=" rounded-2xl py-1 px-4  w-full bg-[#F6F2E6] text-gray-600"
            />
            
          </div>
          <div className="w-full relative">
            <label className="text-[#50504F]">Email</label>
            <input
              name="email"
              value={formValues.email}
              type="text"
              placeholder="example@gmail.com"
              onChange={handleChange}
              className=" rounded-2xl py-1 px-4  w-full bg-[#F6F2E6] text-gray-600"
            />
            {formErrors.email && (
              <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.email}</p>
            )}
          </div>

          <div className=" w-full relative mt-2">
            <label className="text-[#50504F]">Mot de passe</label>
            <input
              name="password"
              value={formValues.password}
              type={passwordType}
              placeholder="************"
              onChange={handleChange}
              className=" rounded-2xl py-1 px-4  w-full bg-[#F6F2E6] text-gray-600"
             />
            <a className="absolute bg-transparent left-[90%] top-[42%]" onClick={togglePassword}>
              {passwordType === 'password' ? (
                <VisibilityIcon className="text-lg mt-1 text-black" />
              ) : (
                <VisibilityOffIcon className="text-lg mt-1 text-black" />
              )}
            </a>
            {formErrors.password && (
              <p style={{ color: 'red', fontSize: '12px' }}>{formErrors.password}</p>
            )}
          </div>

          <button  onClick={props.handleConnectClick} className="px-6 py-1 bg-[#C1DCAB] border-none w-auto h-auto text-lg rounded-2xl font-semibold mt-6">
            
              S'inscrire
           
          </button>
          <button
            className="border-none bg-transparent text-sm pt-4 text-[#162641]"
            onClick={props.handleCon}
          >
            Vous avez déjà un compte ? 
            <p className='hover:text-blue-400 text-xs hover:underline' >Se connecter</p>
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
