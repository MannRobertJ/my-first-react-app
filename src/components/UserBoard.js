import React, { Component } from "react";

export default class UserBoard extends Component {
  append() {
      return this.props.users.reduce((string, user) => {
        return string + "<br>" + `User: ${user}`
    }, "")
  }
  render() {
    return (
      <p>
        {this.append()}
      </p>
    );
  }
}



