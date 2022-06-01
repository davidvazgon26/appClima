import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Swal from 'sweetalert2' 


const apiKey  = process.env.REACT_APP_SECRET_APIKEY;

export default function App() {
  const [cities, setCities] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  
  // console.log(apiKey)

  function onSearch(city) {
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then((response_json) => {
      // console.log(response_json);
      if(response_json.main !== undefined){
        const city = {
          min: Math.round(response_json.main.temp_min),
          max: Math.round(response_json.main.temp_max),
          img: response_json.weather[0].icon,
          id: response_json.id,
          wind: response_json.wind.speed,
          temp: response_json.main.temp,
          humidity: response_json.main.humidity,
          name: response_json.name,
          country: response_json.sys.country,
          weather: response_json.weather[0].main,
          clouds: response_json.clouds.all,
          latitude: response_json.coord.lat,
          longitude: response_json.coord.lon
        };
        setCiudades(oldCiudades => [...oldCiudades, response_json.name]);
        
        if (ciudades.includes(city.name)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: navigator.language.split('-',1)[0]==='es'?"La Ciudad ya habia sido agregada...":'The City had already been added...',
          })
        } else {
          setCities(oldCities => [...oldCities, city]);
          
        }
        

      } else {
        // alert("Ciudad no encontrada");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: navigator.language.split('-',1)[0]==='es'?"Ciudad no encontrada":'City ​​not found!',
        })
      }
    })

    .catch(e=> console.log(e))

  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  

  return (
    <div className="App">
      <div>
        <Nav className="nav" onSearch={onSearch} ciudades={ciudades}/>
      </div>
      <hr className="barra"/>
      <div className="bodyCards">
        <Cards className="cards" cities={cities} onClose = {onClose}/>
      </div>
     
    </div>
  );
}
