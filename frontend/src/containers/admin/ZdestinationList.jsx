import React from 'react'
import"./ZdestinationList.css"
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LogoutIcon from '@mui/icons-material/Logout';

function ZdestinationList() {
  return (
    <div className='cointainer-ZDlist'>
        <div className='ZD-right'>
        <img src='./logoAdmin.png' alt='logoAdmin' />
        <div className='ul-ZD'>
        <div className='li-ZD li-ZD-activate'><GroupIcon sx={{ paddingRight:'7px'}}/>Utilisateurs</div>
        <div className='li-ZD'><LocationOnIcon  sx={{ paddingRight:'7px'}}/>Lieux</div>
        <div className='li-ZD'><EventIcon sx={{ paddingRight:'7px'}}/>Evènements</div>
        <div className='li-ZD'><EqualizerIcon sx={{ paddingRight:'7px'}}/>Statistiques</div>
        <div className='li-ZD'><KeyboardReturnIcon sx={{ paddingRight:'7px'}}/>Retour</div>
        <div className='li-ZD'><LogoutIcon sx={{ paddingRight:'7px'}}/>Se déconnecter</div>
        </div>
        </div>
         
         

    </div>
  )
}

export default ZdestinationList