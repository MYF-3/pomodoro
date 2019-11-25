import React, { Component } from "react";

export class Timer extends Component {
  render() {
    return (
      <div>{`${this.props.minutes}:${
        this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds
      }`}</div>
    );
  }
}

export default Timer;
