import React from "react";

const Weather = (props) =>{

   let w = props.weather;
   if (!w || !w.weather) {
      return <div>No weather.</div>
   }
   let temp = (w.main.temp -273.15)*1.8+32.0;
   let iconUrl = "http://openweathermap.org/img/w/"+w.weather[0].icon+".png";

   return(
      <div class="weather-data">
         <h1>City: {w.name}</h1>
         <h2>Temp: {temp}&#176;F</h2>
         <div>{w.weather[0].main}, {w.weather[0].description}</div>
         <img className="grow" src={iconUrl} width="400"/>

      </div>
   )

}

export default Weather;
