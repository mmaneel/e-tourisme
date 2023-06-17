import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const DropDown = ({options,style,element}) => {
  
  const [showOptions, setShowOptions]=useState(false)
  const navigate = useNavigate()
  const handleClick = ()=>{
    setShowOptions(!showOptions);
  }
  const handleOnClick = ()=>{
    navigate("/main");
  }
    return (
        <div className="relative inline-block text-left">
        <div>
          <button onClick={handleClick} type="button" className={style} id="menu-button" aria-expanded="true" aria-haspopup="true">
           {element}
          </button>
        </div>
        {showOptions && ( <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="py-1 z-10" role="none">
           {options && options.map((option) => (
            
            <a href={option.link} className="text-gray-700 block px-4 py-2 text-sm hover:bg-blueGray" role="menuitem" tabindex="-1" id="menu-item-0">{option.name}</a>
           ))}
             <a onClick={handleOnClick}  className="text-gray-700 block px-4 py-2 text-sm hover:bg-blueGray" role="menuitem" tabindex="-1" id="menu-item-0">Log out</a>
          
            </div>
        </div>)}
      </div>
     
    );
};

export default DropDown;