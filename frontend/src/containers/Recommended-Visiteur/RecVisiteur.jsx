import React from 'react'
import "./RecVisiteur.css"
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';





function RecVisiteur() {
  const tab=[
    {id:1,nom:'Plage',region:'Oran',star:'3.5',color:'#C1DCAB'},
    {id:2,nom:'Bhar',region:'Alger',star:'4.5',color:'#88AFDE'},
    {id:3,nom:'Plage',region:'tizi',star:'4.5',color:'#F7A832'},
    {id:4,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},
    {id:5,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},
    {id:6,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},
    {id:7,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},
    {id:8,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},
    {id:8,nom:'Bhar',region:'Oran',star:'4.5',color:'#C1DCAB'},]
  return (
    <div>
      
  <div className='container-lieuDV'>
       {tab.map((e)=>(
        <div className='lieu-form'>
        <img src='./mosq.jpg' alt="photo"/>
    <div className='lieu-name'>
      <h3>{e.nom}</h3>
      <span className="region-name">{e.region}</span>
      <div className='icon-star'>
      <StarIcon
       sx={{ color:'#FFC700',marginRight:'8px'}}/>
       <span>{e.star}</span>
      </div>
    </div>
    </div>  
       ))}
       </div>
       
      
    </div>
  )
}

export default RecVisiteur