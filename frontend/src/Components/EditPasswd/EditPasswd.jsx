import React,{useState,useEffect} from 'react'
import './EditPasswd.css'
import ClearIcon from '@mui/icons-material/Clear';

function EditPasswd() {
  return (
    <>
    <div className='container-Editpasswd'>
     <form>
    <ClearIcon   sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "6%"}}/>
    <h3 >Modifier mon mot de passe</h3>
    <div className='display'>
      <div className='input-info'>
    <input 
       name="email"
       type="password"
       placeholder='Mot de passe actuel'
       />
      </div>    
<div className='input-info'>
    <input 
     name ="password"
    type='password'
    placeholder='Nouveau mot de passe'
/>
</div>
<div className='input-info'>
    <input 
     name ="password"
    type='password'
    placeholder='Confimer votre mot de passe'
/></div>
</div>
<button className='btn-confirm' type='submit'>Confirmer</button>    
  </form>
  </div>
  </>
  )
}
export default EditPasswd