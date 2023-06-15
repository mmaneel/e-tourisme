import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import"./Favoris.css"

function Favoris() {
    const tab=[
        {id:1,nom:'Plage',region:'Oran',star:'3.5'},
        {id:2,nom:'Bhar',region:'Alger',star:'4.5'},
        {id:3,nom:'Plage',region:'tizi',star:'4.5'},
        {id:4,nom:'Bhar',region:'Oran',star:'4.5'},
        {id:5,nom:'Plage',region:'Oran',star:'4.5'},
        {id:6,nom:'Bhar',region:'Oran',star:'4.5'},
        {id:7,nom:'Plage',region:'Oran',star:'4.5'},
        {id:8,nom:'Bhar',region:'Oran',star:'4.5'},
    ]
    
  return (
    <>
    <div className='container-fav'>
    <img className='ligne-pic' src='./ligne.png' alt="photo"/>
        <h1 style={{ color: '#162641' , textAlign:'center',marginBottom:'70px',marginTop:'0px',paddingTop:'0px'}}>Mes Favoris</h1>
    {tab.map((e)=>(
      <div className='lieu-form-fav'>
        <img src='./mosq.jpg' alt="photo"/>
        <div className='lieu-form-R-fav'>
            <div className='lieu-name-fav'>
                 <h3>{e.nom}</h3>
                 <div className='icon-star'>
                    <StarIcon sx={{ color:'#FFC700',marginRight:'8px'}}/>
                    <span>{e.star}</span>
                 </div>
            </div>
            <span className="region-name">{e.region}</span>
            <p>Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis 
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               consectetur sint et totam </p>
        </div>
      </div>))}
      <img className='ligne-pic1' src='./ligne1.png' alt="photo"/>
      <img className='ligne-pic2' src='./ligne2.png' alt="photo"/>
    </div>
    </>
  )
}

export default Favoris