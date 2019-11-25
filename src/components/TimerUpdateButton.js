import React, { Component } from "react";

export class TimerUpdateButton extends Component {
  render() {
    return (
      <div>
        <button>{this.props.button}</button>
      </div>
    );
  }
}

export default TimerUpdateButton;
