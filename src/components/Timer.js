import React, { Component } from "react";

export class Timer extends Component {
  render() {
    return (
      <div>
        {" "}
        <section className="timer">{`${this.props.minutes}:${
          this.props.seconds < 10
            ? `0${this.props.seconds}`
            : this.props.seconds
        }`}</section>
      </div>
    );
  }
}

export default Timer;
