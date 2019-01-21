import React, { Component } from "react";

export default class User extends Component {
  constructor(name) {
    this.name = name;
  }
  render() {
    return (
      <p>
        User: <strong>`${this.name}`</strong>{" "}
      </p>
    );
  }
}


