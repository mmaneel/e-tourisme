import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/WindowSize.js';
import { useScrollPosition } from '../../hooks/ScrollPosition.js';
import DropDown from '../dropDown/index.js';
import Login from '../AUth/Login.jsx'
import Register from '../AUth/Register.jsx'
import { Link } from 'react-router-dom';
import Notifications from '../Notifications/index.js';

const NavBar = () => {
  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();
  const menuToggleRef = useRef(null);
  const headerRef = useRef(null);
  const [activeLink, setActiveLink] = useState('home');
  const [showNotif, setShowNotif]= useState(false)



  const [Active,setActive]=useState(false)// For the logIn and SignUp popup
  const [signIn, setSignIn]=useState(false)
  const handleClick = ()=>{
	  setActive(!Active)
	  setSignIn(false)
  }
  const handleSignInClick = ()=>{
	  setActive(!Active)
	  setSignIn(true)
  }
  const handleSeConnecter = ()=>{
	setSignIn(true)
  }
  const handleSInscrire = ()=>{
	setSignIn(false)
  }
  const handleNotifClick= ()=>{
	setShowNotif(true)
  }
  const handleCloseNotif= ()=>{
	setShowNotif(false)
  }
  const handleSeConnecterClick = ()=>{
    setLogged(true)
    }

  const [isMenuOpen, setIsMenuOpen] = useState(false);// For the dropDown
  const options =[ {name:'Favoris', link:'/main'}]// What to include in the dropdown
    

  const[logged,setLogged]=useState(false)// Pour changer l'apparence du navBar lorsqu'un utilisateur se connecte à son compte

  useEffect(() => {
    const toggleElement = menuToggleRef.current;
    if (
      windowSize.width &&
      windowSize.width > 1024 &&
      toggleElement &&
      toggleElement.checked
    ) {
      toggleElement.click();
    }
  }, [windowSize.width]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div>
{showNotif ? <>
	<div  className=' w-full h-screen flex flex-row justify-center items-center z-20 fixed bg-black bg-opacity-40'>
						</div> 
						<div className='w-full h-full flex justify-center items-center fixed z-20'>
							<Notifications handle={handleCloseNotif}>
							</Notifications>
						</div>
			 </>
		   : <></>
}
{  Active  ? 
        <> {!signIn ? <>
						<div  className='w-full h-screen flex flex-row justify-center items-center z-20 fixed bg-black bg-opacity-40'>
						</div> 
						<div className='w-full h-full flex justify-center items-center fixed z-20'>
							<Login handle={handleClick} handleCon={handleSeConnecter} handleConnectClick={handleSeConnecterClick}>
							</Login>
						</div>
				    </> 
        :   <>
				        <div  className='w-full h-screen flex flex-row justify-center items-center z-20 fixed bg-black bg-opacity-40'>
						</div> 
						<div className='w-full h-full flex justify-center items-center fixed z-20'>
							<Register handle={handleClick} handleSinscr={handleSInscrire} handleConnectClick={handleSeConnecterClick}> 
							</Register>
						</div>
				    </>}
         </>: <></> }
    <div className='font-jost w-full bg-blueGray flex flex-row justify-between text-black text-lg px-20 py-6'>
      <img className='w-8' src='/logoZD.svg' alt='Logo' />

      <input
        type='checkbox'
        id='menu-toggle'
        className='peer hidden'
        ref={menuToggleRef}
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label
        className={`relative flex flex-col w-10 gap-2 lg:hidden z-20 group mx-5 ${
          isMenuOpen ? 'rotate-45 absolute' : ''
        }`}
        htmlFor='menu-toggle'
      >
        <span className='bg-black h-[6px] w-full rounded-md transition-transform origin-center'></span>
        <span
          className={`bg-black h-[6px] w-full rounded-md transition-opacity ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`bg-black h-[6px] w-full rounded-md transition-transform origin-center ${
            isMenuOpen ? '-rotate-90 absolute top-0 right-0' : ''
          }`}
        ></span>
      </label>

      <div
        className={`flex flex-row justify-between gap-8 font-medium ${
          isMenuOpen ? 'flex-col' : 'hidden lg:flex'
        }`}
        style={{ minWidth: 'min-content' }}
      >
        <a href='/main'>
          <button className='hover:text-orange hover:underline mt-17'>
            Accueil
          </button>
        </a>
        <a href='/search'>
          <button className='hover:text-orange hover:underline mt-17'>
            Recherche
          </button>
        </a>
        <a href='/PageActive'>
          <button className='hover:text-orange hover:underline mt-17'>
            Actualités
          </button>
        </a>
		</div>
		{!logged ?  <div className={`flex flex-row justify-between gap-8 font-medium ${
						isMenuOpen ? 'flex-col' : 'hidden lg:flex'
						}`}
						style={{ minWidth: 'min-content' }}
					>
						<a >
						<button onClick={handleSignInClick}className='hover:bg-[#CBDEEC] hover:rounded-2xl px-2 mt-17'>
							Se connecter
						</button>
						</a>
						<a >
						<button onClick={handleClick}  className='bg-[#CBDEEC] rounded-2xl px-2 mt-17'>
							S'inscrire
						</button>
						</a>
					</div>
	             :   <div className='flex flex-row justify-between gap-4 font-medium'>
					      <div className='flex flex-row justify-between gap-1 items-center'>
							<p>Mon compte</p>
							<DropDown options={options} style="w-[20px] flex items-center justify-center" element={<img src='/fleche.png' className='w-s10 h-s10'></img>}></DropDown>
		                  </div>
						  <div className='flex flex-row items-center justify-center '>
							<button onClick={handleNotifClick}><img src='/notif.png' width='30px' ></img></button>
						  </div>
					 </div>
			}
     </div>
	</div>
  );
};

export default NavBar;