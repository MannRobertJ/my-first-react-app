import React, { Component } from "react";

export default class User extends Component {
  state = {here: true};

  toggleStatus = () => {
    this.setState({
      here: !this.state.here
    })
  }

  render() {
    return (
      <p>
        User: <strong>{this.props.name}</strong> <br />
        {this.props.name} is {this.state.here ? " here" : " away"} <br />
        <button onClick={this.toggleStatus}>Toggle</button>
      </p>
    );
  }
}
