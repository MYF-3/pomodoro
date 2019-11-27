import React from "react";
import Timer from "./components/Timer";
import TimerSetButton from "./components/TimerSetButton";
import TimerUpdateButton from "./components/TimerUpdateButton";
import BreakTime from "./components/BreakTime";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 25,
      seconds: 0,
      toggle: true,
      id: 0,
      intervalId: 0
    };

    this.alterInitialTime = this.alterInitialTime.bind(this);
    this.stopTimefn = this.stopTimefn.bind(this);
    this.startTimefn = this.startTimefn.bind(this);
    this.resetTimefn = this.resetTimefn.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
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

    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId
    });
  }

  decreaseTimer() {
    const { seconds, minutes } = this.state;
    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }));
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.state.intervalId);
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59
        }));
      }
    }
  }

  alterInitialTime(i) {
    console.log("THIS", this.props);
    console.log("TARGET", i.target);
    this.stopTimefn();
    this.setState({
      minutes: i.target.id,
      seconds: 0
    });
  }

  stopTimefn() {
    //   this.setState({
    //     toggle: false
    //   });
    // }

    clearInterval(this.state.intervalId);
  }

  startTimefn() {
    // this.setState({
    //   toggle: true
    // });
    // console.log("hi");
    this.componentDidMount();
  }

  resetTimefn() {
    // this.myInterval = setInterval(() => {
    //   const { seconds, minutes } = this.state;
    //   if (seconds > 0) {
    //     this.setState(({ seconds }) => ({
    //       seconds: seconds - 1
    //     }));
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       clearInterval(this.myInterval);
    //     } else {
    //       this.setState(({ minutes }) => ({
    //         minutes: minutes - 1,
    //         seconds: 59
    //       }));
    //     }
    //   }
    // }, 1000);

    this.stopTimefn();
    this.setState({
      seconds: 0,
      minutes: 25
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // if (this.state.toggle === false) {
  //   //   console.log("stop");
  //   //   clearInterval(this.myInterval);
  //   // }
  //   // return this.resetTimefn;

  //   if (nextState.toggle !== this.state.toggle) {
  //     clearInterval(this.myInterval);
  //     console.log(`1 ${this.state}`);
  //   } else {
  //     return true;
  //     console.log(`3 ${this.state}`);
  //   }
  // }

  render() {
    return (
      <div>
        <main>
          <h2>Pomodoro Timer</h2>
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
          <section className="button-layout">
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
          </section>
          {this.state.minutes === 0 && this.state.seconds === 0 ? (
            <BreakTime />
          ) : null}
        </main>
      </div>
    );
  }
}

export default App;
