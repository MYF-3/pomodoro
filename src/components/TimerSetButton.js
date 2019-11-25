import React, { Component } from "react";

export class TimerSetButton extends Component {
  render() {
    return (
      <div>
        <button id={this.props.id} onClick={this.props.alterTime}>
          {`${this.props.minutes} minutes`}
        </button>
      </div>
    );
  }
}

export default TimerSetButton;
