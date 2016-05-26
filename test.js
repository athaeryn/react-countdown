import React from "react";
import { render } from "react-dom";
import Countdown from "./index";


class CountdownOverlay extends React.Component {
  render() {
    return <div className="countdown">{this.props.count}</div>;
  }
}


class CountdownTestApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addTwoSeconds = this.addTwoSeconds.bind(this);
    this.state = {
      countdownStarted: false
    };
  }

  handleEnd() {
    this.setState({countdownStarted: false});
  }

  handleClick() {
    this.setState({countdownStarted: true});
  }

  addTwoSeconds () {
    if (this.countdown) {
      this.countdown.addTime(2)
    }
  }

  render () {
    return (
      <div onClick={this.addTwoSeconds}>
        { this.state.countdownStarted
            ? (<Countdown ref={(c) => { this.countdown = c }} onComplete={this.handleEnd}>
                <CountdownOverlay />
              </Countdown>)
            : null }
        <button onClick={this.handleClick}>
          Start Countdown
        </button>
      </div>
    );
  }
}


document.addEventListener(
  "DOMContentLoaded",
  () => {
    render(
      <CountdownTestApp />,
      document.getElementById("container")
    );
  }
);

