import React, { Component } from "react";
import "../Title/title.css";

class Title extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="heading">Weather-App</h2>
        <p1 className="heading1">Find out temprature,conditions and more</p1>
      </div>
    );
  }
}

export default Title;
