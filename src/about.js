import React, { Component } from 'react';
import Weather from "./weather.js";
import './App.css';

class About extends Component {

   constructor(props) {
      super(props);
      this.state = {
         weather: "",
         zip: 0
      }

      this.WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?";
      this.API_KEY = "&appid=052f26926ae9784c2d677ca7bc5dec98";
   }

   doFetch = ()=> {
      let base = this;

      let zip = this.state.zip+"";
      let url = this.WEATHER_URL+"zip="+zip+",us"+this.API_KEY;
      fetch(url)
         .then((response) => {
            if (response.status==404) {
               base.setState({weather: "Zip not found."});
               return null;
            } else {
               return response.json();
            }
         }).then((weather)=>{
            if (weather && weather.name) {
               base.setState({weather: weather});
            }
         })
   }

   handleSubmit = (e) => {
      e.preventDefault();
      this.setState({zip: e.target.zip.value}, ()=>{ this.doFetch() });
   }


  render() {
    return (
      <div className="About">
         <form onSubmit={this.handleSubmit}>
            <label for="zip">Enter your Zip Code:</label>
            <input type="text" name="zip" />
         </form>
         <Weather weather={this.state.weather} />
      </div>
    );
  }
}




export default About;
