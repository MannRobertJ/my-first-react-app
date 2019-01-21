import React, { Component } from "react";

import User from "./User"

export default class UserBoard extends Component {
  render() {
      return <div> 
          <h1> Users </h1>
          <User name = "Work" />
          <User name = "Damn" />
          <User name = "You" /> 
      </div>
  }
}
