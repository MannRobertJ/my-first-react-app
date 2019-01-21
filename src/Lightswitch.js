import React, { Component } from "react";

export default class LightSwitch extends Component {
  state = { active: true };

  render() {
    return (
      <div>
        <p>
          The light switch is <b>{this.state.active ? "on" : "off"}</b>
        </p>
      </div>
    );
  }
}
