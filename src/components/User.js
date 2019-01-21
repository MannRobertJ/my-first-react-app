import React, { Component } from "react";

export default class User extends Component {
  state = {here: true};

  toggleStatus() {
    this.state.here = !this.state.here;
  }

  render() {
    return (
      <p>
        User: <strong>{this.props.name}</strong>
        {this.props.name} is {this.state.here ? "on" : "off"}
        <button onClick="this.toggleStatus()">Toggle</button>
      </p>
    );
  }
}
