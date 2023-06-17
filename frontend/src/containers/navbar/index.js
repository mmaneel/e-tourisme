import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/WindowSize';
import { useScrollPosition } from '../../hooks/ScrollPosition';



const NavBar = () => {
    const windowSize = useWindowSize();
	const scrollPosition = useScrollPosition();
	const menuToggleRef = useRef(null);
	const headerRef = useRef(null);
	const [activeLink, setActiveLink] = useState('home');

    // const updateActiveLink = () => {
	// 	navLinks.every((navLink) => {
	// 		const element = document.getElementById(navLink.id);
	// 		if (element) {
	// 			const { top, bottom } = element.getBoundingClientRect();
	// 			const vHeight =
	// 				window.innerHeight || document.documentElement.clientHeight;
	// 			if (top < vHeight && bottom >= 128) {
	// 				setActiveLink(navLink.id);
	// 				return false;
	// 			}
	// 		}
	// 		return true;
	// 	});
	// };

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

    return (
        
        <div className= 'w-full bg-blueGray flex flex-row justify-between text-black text-lg px-20 py-6'>
        <img className='w-8' src='/logoZD.svg'></img>
       
        <input
				type='checkbox'
				id='menu-toggle'
				className='peer hidden'
				ref={menuToggleRef}
			/>
        <label
				className='relative flex flex-col w-10 gap-2 lg:hidden z-20 group mx-5'
				htmlFor='menu-toggle'
			>
				<span className='bg-black h-[6px] w-full rounded-md transition-transform origin-center group-[.peer:checked_+_&]:rotate-45 group-[.peer:checked_+_&]:absolute'></span>
				<span className='bg-white h-[6px] w-full rounded-md transition-opacity group-[.peer:checked_+_&]:opacity-0'></span>
				<span className='bg-white h-[6px] w-full rounded-md transition-transform origin-center group-[.peer:checked_+_&]:-rotate-45 group-[.peer:checked_+_&]:absolute'></span>
			</label>
        
            <div className='flex flex-row justify-between gap-8 font-medium'>
                <a href='/main'><button className='hover:text-orange hover:underline mt-17'>Accueil </button></a>
                <a href='/search'><button className='hover:text-orange hover:underline mt-17'>Recherche</button></a>
                <a href='#projects'><button className='hover:text-orange hover:underline mt-17'>Actualités </button></a>
            </div>
            <div className='flex flex-row justify-between gap-8 font-medium'>
                <a href='#services'><button className='hover:bg-[#CBDEEC] hover:rounded-2xl px-2   mt-17'>Se connecter </button></a>
                <a href='#projects'><button className=' bg-[#CBDEEC] rounded-2xl px-2  mt-17'>S'inscrire </button></a>
            </div>
     
       
    </div>
    );
};

export default NavBar;