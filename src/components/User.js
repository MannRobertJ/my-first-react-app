import React, { Component } from "react";

export default class User extends Component {
  here = true;

  toggleStatus() {
    this.here = !this.here;
  }

  render() {
    return (
      <p>
        User: <strong>{this.props.name}</strong>
        {this.props.name} is {this.state.active ? "on" : "off"}
        <button onClick="this.toggleStatus()">Toggle</button>
      </p>
    );
  }
}
