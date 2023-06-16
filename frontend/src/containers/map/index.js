import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
//import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
} from "react-map-gl";
import mapboxgl from 'mapbox-gl';


const Mapi = () => {
  const [lng, setLng] = useState(3.042048 );
  const [lat, setLat] = useState(36.752887);
 return(
   <div className='h-auto relative w-full flex flex-row  justify-around px-20'>
               <div className='py-10 w-full flex flex-col justify-center items-start'>
                 <ReactMapGL
                        mapboxAccessToken="pk.eyJ1IjoiaW5lc2JtenoiLCJhIjoiY2xpd2EzOHB3MGVnZzNycmxuaWVleXVkbSJ9.qD2tXOMKi1rbqldo1mb2zg"
                        style={{
                        width: "620px",
                        height: "436px",
                        borderRadius: "35px",
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        center= "7.04, 38.907"
                        initialViewState={{
                          longitude: 3.042048,
                          latitude: 36.752887,
                          zoom: 11.5,
                        }}
                        
                    >
                      
                      <NavigationControl position="bottom-right" />
                      <Marker longitude={lng} latitude={lat}></Marker>
                  </ReactMapGL>
                </div>
                <div className='flex flex-col justify-center  items-center h-450px w-full px-24'>
                  <div className='absolute top-4 right-0'>
                    <img src='/plane1.png' width='170px'></img>
                  </div>
                  <div className='text-2xl text-center font-semibold mb-10'>Utilisez la map pour découvrir, rechercher et repérer les endroits de séjour désirés.  </div>
                  <div className='px-4 py-2 bg-orange rounded-2xl text-xl text-center font-medium'>Explorez la map</div>
                </div>
   </div>
 );

};

export default Mapi;