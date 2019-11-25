import React, { Component } from "react";

export class TimerSetButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.alterTime}>
          {`${this.props.minutes} minutes`}
        </button>
      </div>
    );
  }
}

export default TimerSetButton;
