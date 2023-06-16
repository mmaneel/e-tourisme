import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/WindowSize';
import { useScrollPosition } from '../../hooks/ScrollPosition';



const Hero = () => {
    const myStyle ={ 
        backgroundImage:"url('/bgImage.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}
    return (    
    <div className= 'w-full relative h-[550px] flex flex-col font-jost' style={myStyle}>
        <div className='absolute top-0 h-full py-6 right-0'>
            <img src='/hero_icon.svg' className='h-full' ></img>
        </div>
        <div className='h-full w-full bg-bgblue flex flex-col justify-center px-40'>
            <p className='text-4xl font-bold'>Bienvenue à</p>
            <img className='w-60' src='/ZDestination.svg'></img>
            <p className='text-xl font-light text-gray mt-2'>Votre guide vers vos destinations de rêves en Algérie!</p>
        </div>
    </div>
    );
};

export default Hero;