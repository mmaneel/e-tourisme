import React, {useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import NotifComponent from './notifComponent';

const Notifications = (props) => {
 return(
   <div className='font-jost flex flex-col items-center justify-center h-full w-[500px] m-auto'>
         <div className='w-full rounded-2xl bg-white h-[70%] flex flex-col gap-3'>
           <div className='flex flex-row items-center justify-center relative w-full h-[18%] shadow-lg'>
                <ClearIcon  onClick={props.handle} className="absolute top-4 right-4" />
                <p className='font-bold text-xl font-jost'>Mes notifications</p>
           </div>
           <div className='overflow-scroll'>
             <NotifComponent></NotifComponent>
             <NotifComponent></NotifComponent>
             <NotifComponent></NotifComponent>
             
           </div>
         </div>
  </div>
 );

};

export default Notifications ;