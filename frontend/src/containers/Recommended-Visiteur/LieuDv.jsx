import React,{useState} from 'react'
import "./LieuDv.css"
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

function LieuDv() {
    const tab=[
        {id:1,nom:'Event Name',region:' Lieu',color:'#C1DCAB'},
        {id:2,nom:'Event Name',region:' Lieu',color:'#88AFDE'},
        {id:3,nom:'Event Name',region:' Lieu',color:'#F7A832'},
        {id:4,nom:'Event Name',region:' Lieu',color:'#C1DCAB'},
        {id:5,nom:'Event Name',region:' Lieu',color:'#F7A832'},
       
       
    ]
    
  return (
  <>
 <div className='container-DV'>
    {tab.map((e)=>(
      <div className='lieu-form-DV'>
        <img src='./mosq.jpg' alt="photo"/>
        <div className='lieu-form-R-DV'>
            <div className='lieu-name-DV'>
                 <h3>{e.nom}</h3>
                 <div className='icon-star'>
                    <img src="./saved.svg" />
                 </div>
            </div>
            
            <span className="region-name-DV" style={{ color: e.color,textDecoration:'underline' }}>{e.region} : </span>
            <div className='dscp-actl'>
            <p><span style={{ color: e.color }}>Details de l’evenement : </span>Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis aut aspernatur saepe ut
              consectetur sint et totam atque qui voluptas maiores qui impedit vero? Ad alias animi
               eum sunt </p>

             
            </div>
            
        </div>
      </div>))}
    </div>
   </> 
  )
}

export default LieuDv