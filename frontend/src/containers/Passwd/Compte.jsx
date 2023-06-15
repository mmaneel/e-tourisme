import React,{useState} from 'react'
import './EditPasswd.css'
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditPasswd from './EditPasswd';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

function Compte() {
    const [hide,setHide]=useState(false)
    const [name, setName] = useState('AlgeriaLover');
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleEditClick = () => {
   setIsEditing(true);
   setNewName(name);
 };

 const handleSaveClick = () => {
   setName(newName);
   setIsEditing(false);
 };

 const handleCancelClick = () => {
   setIsEditing(false);
 };

 const handleInputChange = (event) => {
   setNewName(event.target.value);
 };
  return (
    <div className='container-Editpasswd'>
     <form>
        <ClearIcon   sx={{ fontSize: "20px", marginLeft: "90%",marginTop: "6%"}}/>
        <div  className='input-info'>
          <label >Nom</label>
          <div   className='input-info-icon'>
          {isEditing ? (
           <input placeholder="AlgeriaLover" value={newName} onChange={handleInputChange} />
           ) : (
            <input placeholder="AlgeriaLover" value={name} disabled />
            )}
            <EditIcon
              sx={{ position: 'absolute', top: '13px', right: '5px', cursor: 'pointer' }}
              onClick={handleEditClick}
            />
          </div>
          {isEditing && (
        <div className='btn-name-change'>
          <button  className="buton icon" onClick={handleSaveClick}>Enregistrer</button>
          <button  className="buton primary " onClick={handleCancelClick}>Annuler</button>
        </div>
      )}
             

        </div>
        <div className='input-info'>
          <label >Email</label>
             <input 
                name="email"
                type="text"
                placeholder='example@gmail.com'
                                    />
        </div>
        <div className='editpasswd-box'>
           <h3 >Modifier mon mot de passe</h3>
           <KeyboardArrowDownIcon onClick={()=>setHide(!hide)} sx={{ fontSize: "25px", marginRight: "4%"}}/>
        </div>
        {hide? <EditPasswd/> :null}
        <div >
        <Link className='fav-box' to="/Favoris">
           <h3 >Mes favoris</h3>
           <BookmarkIcon  onClick={()=>setHide(!hide)} sx={{ fontSize: "17px",marginTop: "1%",marginLeft:'1%',color:"#162641"}}/>
           </Link>
        </div>


      
 </form>
 </div>
  )
}

export default Compte