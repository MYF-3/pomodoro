import React, { Component } from "react";

export class Timer extends Component {
  render() {
    return <div>{`${this.props.minutes}:${this.props.seconds}0`}</div>;
  }
}

export default Timer;
