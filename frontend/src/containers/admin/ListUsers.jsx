import React from 'react'
import './ListUsers.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function ListUsers() {
    const data = [
        { id: 1,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'Item 1' ,date: '23-09-2023',icon:<DeleteIcon/> },
        { id: 2,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'Item 2' ,date: '03-08-2023',icon:<DeleteIcon/> },
        { id: 3,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'Item 3' ,date: '25-08-2023',icon:<DeleteIcon/>},
        { id: 4,profil:<AccountCircleOutlinedIcon sx={{width:'40px',height:'40px'}}/>,
         name: 'Item 4' ,date: '01-05-2023',icon:<DeleteIcon/>},
        
      ];
      const myList = data.map((item) => (
        <li className='ul-user1' key={item.id}> 
        <p className='li-user1'>{item.profil}</p>
        <p className='li-user1 n'>{item.name}</p>
        <p className='li-user1'>{item.date}</p>
        <p className='li-user1'>{item.icon}</p>
         </li>
      ));
  return (
    <div className='container-List-users'>
        <div className='titre-li'>
        <h3>Nom</h3>
        <h3>Date d'inscription</h3>
        </div>
        
      <ul >{myList}</ul>

    </div>
  )
}

export default ListUsers