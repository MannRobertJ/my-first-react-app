import react, { Component } from "react";

export default class Clock extends Component {
    status = {
        hours: Date().getHours(),
        minutes: Date().getMinutes(),
        seconds: Date().getSeconds()
    }
    render() {
        return (<p>
        <span id="hours">{this.status.hours}</span> : 
        <span id="minutes">{this.status.minutes}</span> : 
        <span id="seconds">{this.status.seconds}</span> </p>
        )
    }
}
