import React,{useState} from 'react'
import LieuDv from './LieuDv'
import RecVisiteur from './RecVisiteur'
import "./PageActive.css"
import { Link } from 'react-router-dom';
import Favoris from '../Favoris/Favoris';
import NavBar from '../navbar';

function PageActive() {
  const [favoris, setFavoris] = useState([]);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    
    const addToFavorites = (lieu) => {
      setFavoris([...favoris, lieu]);
    };
  return (
    <>
     <div className='rec-list'>
     <NavBar/>
        <div className='rec-listt'>
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
  
  </div>
  {toggleState === 1 ? (
        <LieuDv addToFavorites={addToFavorites} />
      ) : (
        <RecVisiteur />
      )}
      
      

    
    </>
  )
}

export default PageActive