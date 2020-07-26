import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './delete.jpg';
import './Weather.css';

export class WeatherItem extends Component {
    getStyle = () => {
        return {
            background: '#E6E6FA',
            padding: '25px',
            borderBottom: '1px #ccc dotted',
        }
    }

    render() {
        const { id, title, MaxTemp, MinTemp, Temp } = this.props.w;
        return (
            <div style={this.getStyle()}>
                <p> {title}
                    <button onClick={this.props.deleteWeather.bind(this, id)} style={buttonStyle}>
                        <img src = {Logo} style = {{width: 50, height: 50}} className = "delete-button" alt ="Logo"></img>
                </button>
                </p>
                <p style={{ textAlign: "center"}}>
                    MaxTemp: {MaxTemp}
                &nbsp;
                &nbsp;
                MinTemp: {MinTemp}
                &nbsp;
                &nbsp;
                Temp: {Temp}
                </p>
            </div>
        )
    }
}

const buttonStyle = {
    cursor: "pointer",
    float: "right",
}


WeatherItem.propTypes = {
    w: PropTypes.object.isRequired,
    deleteWeather: PropTypes.func.isRequired
}


export default WeatherItem
