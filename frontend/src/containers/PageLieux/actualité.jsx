import React,{useState} from 'react';
import './actualité.css'

function Actualité() {
    const [tab,setTab]=useState([
        {id:1,name:'nouvel event'},
        {id:2,name:'new event '},
    ])
    return (
        <>
        {tab.map((e)=>(
    <div className='actualité'>
        <div className='eventimage'>
        </div>
        <div className='NewEvent'>
            <h3>N{e.name}</h3>
            <div className='dv-sp'>
            <span>Des fouilles récentes ont révélé un site archéologique rare
                 et bien préservé au cœur de la vieille ville. Les experts
                  estiment que les découvertes pourraient remonter à plus de 
                  mille ans.</span>
            </div>
            
        </div>
    </div>))} </>);
}

export default Actualité;