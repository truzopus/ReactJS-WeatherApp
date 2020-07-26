import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Weather from './components/Weather';
import AddWeather from './components/AddWeather';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    weathers: [
      {title: 'Vancouver',
      id: 1,
      MaxTemp: 25,
      MinTemp: 22,
      Temp: 23
    }
    ]
  }

  deleteWeather = id => {
    this.setState({
      weathers: [...this.state.weathers.filter(w => w.id !== id)]
    })
  }
  
render () {
    return (
      <Router>
        <div className="App">
          <div className="List">
            <header style = {hs}>
              <h1>WeatherList</h1>
              <Link style = {ls} to = "/"> Home </Link> | <Link style = {ls} to = "/AddWeather"> Browse </Link>
            </header>
            <Route 
            exact path = "/"
            render = {props => (
              <React.Fragment>
                <Weather
                  w = {this.state.weathers}
                  deleteWeather = {this.deleteWeather}
                />
              </React.Fragment>
            )}
            />
            <Route path ="/AddWeather" component = {AddWeather} />
          </div>
        </div>
      </Router>
    );
  }
}

const hs = {
  background: '#100',
  color: '#abc',
  textAlign: 'center',
  padding: '15px'
}

const ls = {
  color: '#abc'
}

export default App;
