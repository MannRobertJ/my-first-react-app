import React, { Component } from "react";

export default class User extends Component {
  constructor(name) {
    this.name = name;
  }
  render() {
    return (
      <p>
        User: <strong>`${this.props.name}`</strong>{" "}
      </p>
    );
  }
}


