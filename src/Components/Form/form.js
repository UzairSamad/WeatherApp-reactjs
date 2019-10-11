import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button type="submit">Get Weather</button>
      </form>
    );
  }
}

export default Form;
