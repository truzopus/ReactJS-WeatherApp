import React from 'react'
import WeatherComponent from './WeatherComponent'
import './Weather.css';

const Api_Key = "429736441cf3572838aa10530929f7cd";

class AddWeather extends React.Component {
  state = { }
  getWeather = async () => {
    const API = await fetch ()
  }
  render () {
    return (
      <div className ='AddWeather'>
        hi     
      </div>
    )
  }
}


export default AddWeather;