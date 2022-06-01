import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch, ciudades}) {
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // Evita recargar la pagina
      onSearch(city); //Invoca a onSearch y lo guard en setCity 
      setCity('')  //Limpia input
    }}>
      <input className="SearchInput" type="text" placeholder={navigator.language.split('-',1)[0]==='es'?'Ciudad...':'City...'} value = {city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="Searchbtn" type="submit" value={navigator.language.split('-',1)[0]==='es'?"Buscar":"Search"} />
    </form>
  );
}
