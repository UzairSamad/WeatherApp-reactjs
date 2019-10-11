import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title/title";
import Form from "./Components/Form/form";
import Weather from "./Components/Weather/weather";

const apiKey = "a7561bf85eeb8d4042a5a87ed820100e";
class App extends Component {
  getWeather = async e => {
    e.preventDefault();

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`
    );
    const data = await apiCall.json();
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
  };

  render() {
    return (
      <div>
        <Title />
        <Weather />
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
