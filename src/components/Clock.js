import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  };

  advanceTime = () => {
/*     if (this.state.seconds === 59) {
        this.setState({seconds: 0})
        if (this.state.minutes === 59) {
            this.setState({minutes: 0})
            if (this.state.hours === 23) {
                this.setState({hours: 0})
            } else {this.setState({hours: this.state.hours ++})}
        } else {this.setState({minutes: this.state.minutes ++})}
    } else {
        this.setState({seconds: this.state.seconds ++})
    }
 */


    this.setState({
      seconds: (this.state.seconds + 1) % 60
    });
    if (this.stateseconds === 0) {
      this.setState({
        minutes: (this.state.minutes + 1) % 60
      });
    }
    if (this.state.seconds === 0 && this.state.minutes === 0) {
      this.setState({
        hours: (this.state.hours + 1) % 24
      });
    }
  };

  render() {
    setInterval(this.advanceTime, 1000);
    return (
      <p>
        <span id="hours">{this.state.hours}</span> :
        <span id="minutes">{this.state.minutes}</span> :
        <span id="seconds">{this.state.seconds}</span>
      </p>
    );
  }
}
