import React from 'react'
import "./LieuDv.css"
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';




function RecVisiteur() {
  const tab=[
    {id:1,nom:'Plage',region:'Oran',star:'3.5'},
    {id:2,nom:'Bhar',region:'Alger',star:'4.5'},
    {id:3,nom:'Plage',region:'tizi',star:'4.5'},
    {id:4,nom:'Bhar',region:'Oran',star:'4.5'},]
  return (
    <div>
      <div className='rec-list'>
    <div className='REC rec-l'><Link className='link-style' to="/RecVisiteur">Actualités</Link></div>
    <div className=' REC rec-r'><Link  className='link-style' to ="/LieuDV" >Recommandés</Link></div>
  </div>
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