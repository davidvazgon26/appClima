 import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id, country, weather}) {

  let result 
  switch (weather) {
    case "Clouds" :
    result = "cardNublado"
    break;
    case "Clear" :
    result = "cardSoleado"
    break;
    case "Rain" :
    result = "cardLloviendo"
    break;

    default:
      result= "card"
  }

  // console.log(result)

    return (
      <div className={result}>
      <div className="cardEncabezado"></div>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <p>Pais</p>
              <p>{country}</p>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
              <p>Humidity</p>
              <p>{max}%</p>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
              <p>Weather</p>
              <p>{weather}</p>
            </div>
           
          </div>
        </div>
      </div>
    );
};
