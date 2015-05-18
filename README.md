react-countdown
===============

A countdown wrapper component for React.


## Example

```jsx
import React from "react";
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

  render() {
    return (
      <div>
        { this.state.countdownStarted
            ? (<Countdown onComplete={this.handleEnd}>
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
    React.render(
      <CountdownTestApp />,
      document.getElementById("container")
    );
  }
);
```
