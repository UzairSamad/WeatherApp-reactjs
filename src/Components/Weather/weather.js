import React, { Component } from "react";
import "../Weather/weather.css";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div className="weather-css">
        {this.props.city && this.props.country && (
          <p>
            Location : {this.props.city}, {this.props.country}
          </p>
        )}

        {this.props.temp && <p> Temprarture : {this.props.temp}</p>}
        {this.props.description && (
          <p> Description : {this.props.description}</p>
        )}
        {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
