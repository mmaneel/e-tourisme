import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
//import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useControl } from 'react-map-gl';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl, 
} from "react-map-gl";
import mapboxgl from 'mapbox-gl';
import NavBar from '../navbar'
import Mapi from '../map';
import { useEffect } from 'react';
import monuments from '../../monuments.json';
import { useMemo } from 'react';

function Search() {
  const [theme, setTheme]=useState(null);
  const [category, setCategory]=useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const handleThemeChange =(event)=>{
    setTheme(event.target.value)
  }
  const handleCategoryChange =(event)=>{
    setCategory(event.target.value)
}
  


  const pins = useMemo(
    () =>
      monuments.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
        </Marker>
      )),
    []
  );
  
  const Geocoder = () => { 
    const ctrl = new MapBoxGeocoder({
      accessToken: "pk.eyJ1IjoiaW5lc2JtenoiLCJhIjoiY2xpd2EzOHB3MGVnZzNycmxuaWVleXVkbSJ9.qD2tXOMKi1rbqldo1mb2zg",
      marker: true,
      placeholder:'Search',
      mapboxgl: mapboxgl,
   });
    useControl(() => ctrl);
    ctrl.on('result', (e) => {
    });
    return null;
  };

  return (
    <div  className='h-screen relative w-full flex flex-col'>
      <NavBar/>
      <div className='w-full h-full relative flex flex-col justify-center items-start'>
               
                 <ReactMapGL
                        mapboxAccessToken="pk.eyJ1IjoiaW5lc2JtenoiLCJhIjoiY2xpd2EzOHB3MGVnZzNycmxuaWVleXVkbSJ9.qD2tXOMKi1rbqldo1mb2zg"
                        
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        center= "7.04, 38.907"
                        initialViewState={{
                          longitude: 3.042048,
                          latitude: 36.752887,
                          zoom: 11.5,
                        }}
                   >
                      <div className='absolute top-6 z-20 px-4 py-2 rounded-r-xl bg-white flex flex-row justify-between items-center w-2/3 h-16 gap-3'>
                         <div className='w-2/4 h-full '><Geocoder/></div>
                         <div className='flex flex-row justify-between items-center w-full h-full gap-3'>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='w-full px-2 flex justify-center'>
                                <select value={theme} className='w-full font-semibold text-sm rounded py-1 px-1 ' onChange={handleThemeChange}>
                                    <option value="terrain">Terrain</option>
                                    <option value="terrain agricole">Terrain agricole</option>
                                    <option value="appartement">Appartement</option>
                                    <option value="bungalow">Bungalow</option>
                                    <option value="maison">Maison</option>
                                </select>
                            </div>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='w-full px-2 justify-center flex'>
                                <select value={category} className='w-full font-semibold text-sm rounded py-1 px-1 ' onChange={handleCategoryChange}>
                                    <option value="terrain">Terrain</option>
                                    <option value="terrain agricole">Terrain agricole</option>
                                    <option value="appartement">Appartement</option>
                                    <option value="bungalow">Bungalow</option>
                                    <option value="maison">Maison</option>
                                </select>
                            </div>
                            <div className='border-l border-bgshadow h-full'></div>
                            <div className='h-full w-full flex flex-col items-center justify-center '>
                              <div className='h-2/3 bg-orange rounded-2xl flex flex-row items-center justify-center px-6 text-base font-medium'>Rechercher</div>
                            </div>
                        </div>
                       </div>
                     
                      <FullscreenControl position="bottom-right"/>
                      <NavigationControl position="bottom-left" />
                      {pins}
                      {popupInfo && (
                        <Popup
                          anchor="top"
                          longitude={Number(popupInfo.longitude)}
                          latitude={Number(popupInfo.latitude)}
                          onClose={() => setPopupInfo(null)}
                        >
                          <div>
                            {popupInfo.city}, {popupInfo.state} |{' '}
                            <a
                              target="_new"
                              href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                            >
                              Wikipedia
                            </a>
                          </div>
                          <img width="100%" src={popupInfo.image} />
                        </Popup>
                      )}
                  </ReactMapGL>
                </div>
   
  </div>
  )
}

export default Search;
