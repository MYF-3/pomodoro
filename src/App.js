import React from "react";
import "./App.css";
import Timer from "./components/Timer";
import TimerSetButton from "./components/TimerSetButton";
import TimerUpdateButton from "./components/TimerUpdateButton";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 25,
      seconds: 0,
      toggle: true,
      id: 0
    };

    this.alterInitialTime = this.alterInitialTime.bind(this);
    this.stopTimefn = this.stopTimefn.bind(this);
    this.startTimefn = this.startTimefn.bind(this);
    this.resetTimefn = this.resetTimefn.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  alterInitialTime(i) {
    console.log("THIS", this.props);
    console.log("TARGET", i.target);
    this.setState({
      minutes: i.target.id
    });
  }

  stopTimefn() {
    this.setState({
      toggle: false
    });
  }

  startTimefn() {
    this.resetTimefn();
    this.setState({
      toggle: true
    });
    
  }

  resetTimefn() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  shouldComponentUpdate() {
    if (this.state.toggle === false) {
      console.log("stop");
      clearInterval(this.myInterval);
    }
    return this.resetTimefn;
  }

  render() {
    return (
      <div>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <TimerSetButton
          minutes={25}
          seconds={0}
          alterTime={this.alterInitialTime}
          id={25}
        />
        <TimerSetButton
          minutes={5}
          seconds={0}
          alterTime={this.alterInitialTime}
          id={5}
        />
        <TimerUpdateButton
          startTime={this.startTimefn}
          stopTime={this.stopTimefn}
          resetTime={this.resetTimefn}
        />
      </div>
    );
  }
}

export default App;
