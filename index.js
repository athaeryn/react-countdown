import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';


class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
      _interval: null
    };
  }

  componentDidMount() {
    this.state._interval = setInterval(() => {
      let count = this.state.count - 1;
      if (count == 0) {
        clearInterval(this.state._interval);
        this.props.onComplete();
      } else {
        this.setState({count});
      }
    }, 1000);
  }

  renderContents() {
    if (this.props.children) {
      return cloneWithProps(
        this.props.children,
        { count: this.state.count }
      );
    } else {
      return this.state.count;
    }
  }

  render() {
    return <div>{this.renderContents()}</div>;
  }
}

Countdown.defaultProps = {
  count: 3,
  onComplete: () => {}
};

Countdown.propTypes = {
  count: React.PropTypes.number,
  onComplete: React.PropTypes.func
};

export default Countdown;
