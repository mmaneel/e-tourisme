import React,{useState} from 'react'
import LieuDv from './LieuDv'
import RecVisiteur from './RecVisiteur'
import "./PageActive.css"
import { Link } from 'react-router-dom';

function PageActive() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
     <div className='rec-list'>
  <button 
  className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
  onClick={() => toggleTab(1)} >
          Actualités
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Recommandés
        </button>
  </div>
  {
    toggleState===1 ? <LieuDv/>:<RecVisiteur/>
  }

    
    </>
  )
}

export default PageActive