import React from 'react';
import Logo from '../clima.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import Swal from 'sweetalert2'

function Nav({onSearch}, ciudades) {

  function geoLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error)
    }else{ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: navigator.language.split('-',1)[0]==='es'?"Su navegador no soporta la geolocalizacion":'Your browser does not support geolocation',
      })
    }
  }

  function success(geoLocationPosition){
    console.log(geoLocationPosition)
    
    alert(
      `Tu ubicacion actual es:\nLatitude: ${geoLocationPosition.coords.latitude} \nLongitude: ${geoLocationPosition.coords.longitude}`
    )
  }
  function error(err){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.message,
    })
  }


  return (
    <>
      <nav className="navbar">
        <img className="logoHenry" src={Logo} alt="logo Henry" />
        {/* {console.log(navigator.language.split('-',1)[0])} */}
        {navigator.language.split('-',1)[0]==='es'?<p className="titulo navbar-brand"> App del Clima</p>:<p className="titulo navbar-brand">Weather App</p>}
        {/* <p className="titulo navbar-brand">Weather App</p> */}

        {navigator.language.split('-',1)[0]==='es'?"Lenguaje: es": 'Language: en'}
      </nav>
      <div>
      {navigator.language.split('-',1)[0]==='es'?<p className="parrafo">Puedes utilizar el buscador para introducir el nombre de una ciudad y conocer su clima actual</p>:<p className="parrafo">You can use the search engine to enter the name of a city and find out its current climate</p>}
        
      </div>
      <div className="containerForm">
        <SearchBar onSearch={onSearch} ciudades={ciudades} />
        <button className="btnLocation" onClick={ ()=>geoLocation()}>{navigator.language.split('-',1)[0]==='es'?"Mostrar tu ubicación.":'Show your location'}</button>
      </div>
    </>
  );
};

export default Nav;
