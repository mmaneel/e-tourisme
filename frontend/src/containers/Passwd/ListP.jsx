import React, { useState } from "react";
import "./ListP.css"

import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditPasswd from './EditPasswd';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import Compte from "./Compte";

function ListP() {
    const [hide,setHide]=useState(false)
  
  return (
    <>
    <div className="try">
    <div className="profile-list">
              <div className="avatar-p"><img src='./avatar.png' alt="photo"/></div>
             
              <div className="Name-p">
              <p >Jacob Jones</p>
              </div>
    
              <div className='ListP'>
        <div className="list-p">
        <Link className='fav-box' to="/Listp">
           <PersonIcon  sx={{ fontSize: "25px",marginTop: "1%",marginRight:'5%',color:"#162641"}}/>
           <p>Mon Compte</p>
           </Link>
        <Link className='fav-box' to="/Favoris">
           <BookmarkIcon   sx={{ fontSize: "25px",marginTop: "1%",marginRight:'5%',color:"#162641"}}/>
           <p>Mes favoris</p>
           </Link>
         <Link className='fav-box' to="/">
            <LogoutIcon  sx={{ fontSize: "25px",marginTop: "1%",marginRight:'5%',color:"#162641"}}/>
         <p>Déconnecter</p>
         </Link>
    </div>
    </div>
        </div>
        <Compte/>
        </div>
       
    
    </>
  )
}

export default ListP