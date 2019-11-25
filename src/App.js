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
      button: ""
    };
  }

  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     const { seconds, minutes } = this.state;
  //     if (seconds > 0) {
  //       this.setState(({ seconds }) => ({
  //         seconds: seconds - 1
  //       }));
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(this.myInterval);
  //       } else {
  //         this.setState(({ minutes }) => ({
  //           minutes: minutes - 1,
  //           seconds: 59
  //         }));
  //       }
  //     }
  //   }, 1000);
  // }

  render() {
    return (
      <div>
        <Timer minutes={this.state.minutes} seconds={0} />
        <TimerSetButton minutes={25} seconds={0} />
        <TimerSetButton minutes={5} seconds={0} />
        <TimerUpdateButton button={"start"} />
        <TimerUpdateButton button={"stop"} />
        <TimerUpdateButton button={"reset"} />
      </div>
    );
  }
}

export default App;
