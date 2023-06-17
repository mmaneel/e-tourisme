import React, {useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const NotifComponent = (props) => {
 return(
   <div className='shadow-md w-full h-[100px] flex flex-row items-center px-4 py-2'>
         <div className=' w-3/12 h-full' ><img width='90px' height='90px' className='bg-slate-300'></img></div>
         <div className=' w-9/12 flex h-full flex-col justify-between gap-1'>
            <p className='font-semibold text-sm'>Nouvel evenement : {props.nom}</p>
            <p className='font-normal text-xs text-[]'>Nom du lieu {props.lieu}</p>
            <p className='font-normal text-xs text-[]'>Description : lieu touristique de renommée mondiale description lieu touristique de renommée mondiale {props.description} </p>
         </div>
  </div>
 );

};

export default NotifComponent ;