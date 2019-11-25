import React, { Component } from "react";

export class TimerUpdateButton extends Component {
  render() {
    return (
      <div>
        <div>
          <button id="start" onClick={this.props.startTime}>Start</button>
        </div>

        <div>
          <button id="stop" onClick={this.props.stopTime}>
            Stop
          </button>
        </div>

        <div>
          <button id="reset" onClick={this.props.resetTime}>Reset</button>
        </div>
      </div>
    );
  }
}

export default TimerUpdateButton;
