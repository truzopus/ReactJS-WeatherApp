import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import PropTypes from 'prop-types';

class Weather extends Component {
  render () {
      return this.props.w.map((weather) => (
        <WeatherItem key = {weather.id} w = {weather} deleteWeather = {this.props.deleteWeather} />
      ));
    }
  }

  Weather.propTypes = {
    w: PropTypes.array.isRequired,
    deleteWeather: PropTypes.func.isRequired
  }

export default Weather;
 