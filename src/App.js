import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title/title";
import Form from "./Components/Form/form";
import Weather from "./Components/Weather/weather";

const apiKey = "a7561bf85eeb8d4042a5a87ed820100e";
class App extends Component {
  state = {
    humidity: undefined,
    temp: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const data = await apiCall.json();
    console.log(data);
    //checking that if city and country value exist

    if (city && country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        humidity: undefined,
        temp: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please provide the City and Country Name"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temp={this.state.temp}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
