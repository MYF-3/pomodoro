import React, { Component } from "react";

export class TimerSetButton extends Component {
  alterInitialTime() {
    this.setState({
      minutes: this.props.minutes
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.alterInitialTime()}>
          {`${this.props.minutes} minutes`}
        </button>
      </div>
    );
  }
}

export default TimerSetButton;
