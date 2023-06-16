import React from 'react'
import './ListUsers.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function ListUsers() {
    const data = [
        { id: 1,profil:<AccountCircleOutlinedIcon/>, name: 'Item 1' ,date: '23-09-2023',icon:<DeleteIcon/> },
        { id: 2,profil:<AccountCircleOutlinedIcon/>, name: 'Item 2' ,date: '03-08-2023',icon:<DeleteIcon/> },
        { id: 3,profil:<AccountCircleOutlinedIcon/>, name: 'Item 3' ,date: '25-08-2023',icon:<DeleteIcon/>},
        { id: 4,profil:<AccountCircleOutlinedIcon/>, name: 'Item 4' ,date: '01-05-2023',icon:<DeleteIcon/>},
        { id: 5,profil:<AccountCircleOutlinedIcon/>, name: 'Item 5' ,date: '20-04-2023',icon:<DeleteIcon/>},
        { id: 6,profil:<AccountCircleOutlinedIcon/>, name: 'Item 6' ,date: '05-02-2023',icon:<DeleteIcon/>},
        { id: 7,profil:<AccountCircleOutlinedIcon/>, name: 'Item 7' ,date: '14-11-2022',icon:<DeleteIcon/>},
      ];
      const myList = data.map((item) => (
        <li className='ul-user1' key={item.id}> 
        <p style={{marginRight:"20%"}}>{item.profil}</p>
        <p>{item.name}</p>
        <p style={{marginLeft:'22%',marginRight:"30%"}}>{item.date}</p>
        <p>{item.icon}</p>
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