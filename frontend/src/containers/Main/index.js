import React from 'react';
import NavBar from '../navbar'
import Hero from '../hero'
import Actualites from '../actualites'
import Mapi from '../map';
// import './main.css'

function Main() {
 

  return (
    <div className='font-jost'>
      <NavBar/>
      <Hero></Hero>
      <Mapi></Mapi>
      <Actualites></Actualites>
      
  </div>
  )
}

export default Main
