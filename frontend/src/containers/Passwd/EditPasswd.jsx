import React,{useState,useEffect} from 'react'
import './EditPasswd.css'
import ClearIcon from '@mui/icons-material/Clear';

function EditPasswd() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();

    // Vérification si les mots de passe correspondent
    if (newPassword !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    };
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');

    alert("Mot de passe modifié avec succès !");
  };
  return (
    <>
    <div className='display'>
      <div className='input-info'>
    <input 
      name="currentPassword"
      type="password"
      placeholder='Mot de passe actuel'
      value={currentPassword}
      onChange={(e) => setCurrentPassword(e.target.value)}
       />
      </div>    
<div className='input-info'>
    <input 
      name="newPassword"
      type='password'
      placeholder='Nouveau mot de passe'
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
/>
</div>
<div className='input-info'>
    <input 
    name="confirmPassword"
    type='password'
    placeholder='Confirmer votre mot de passe'
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
/></div>
</div>
<button className='btn-confirm' type='submit' onClick={handlePasswordChange}>Confirmer</button>    

  </>
  )
}
export default EditPasswd