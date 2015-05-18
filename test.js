import React from "react";
import Countdown from "./index";

document.addEventListener("DOMContentLoaded", run);


class CountdownDisplay extends React.Component {
  render() {
    return <div className="countdown">{this.props.count}</div>;
  }
}


class CountdownTestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownStarted: false
    };
  }

  handleCountdownEnd() {
    this.setState({countdownStarted: false});
  }

  handleButtonClick() {
    this.setState({countdownStarted: true});
  }

  render() {
    var countdown;
    if (this.state.countdownStarted) {
      countdown = (
        <Countdown onComplete={this.handleCountdownEnd.bind(this)}>
          <CountdownDisplay />
        </Countdown>
      );
    }
    return (
      <div>
        {countdown}
        <button onClick={this.handleButtonClick.bind(this)}>Start Countdown</button>
      </div>
    );
  }
}

function run() {
  let el = document.getElementById("container");
  React.render(<CountdownTestApp />, el);
}
