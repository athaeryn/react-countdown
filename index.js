var React = require('react')

var Countdown = React.createClass({
  interval: undefined,

  getInitialState: function () {
    return {
      count: this.props.count
    }
  },

  componentDidMount: function () {
    this.interval = setInterval(function () {
      let count = this.state.count - 1;
      if (count === 0) {
        clearInterval(this.state._interval)
        this.props.onComplete()
      } else {
        this.setState({count})
      }
    }.bind(this), 1000)
  },

  componentWillUnmount: function () {
    clearInterval(this.interval)
  },

  render: function () {
    if (!this.props.children) {
      throw new Error("No child supplied to <Countdown>!")
    }
    return React.cloneElement(this.props.children, {
      count: this.state.count
    })
  }
})

Countdown.defaultProps = {
  count: 3,
  onComplete: function () {}
}

Countdown.propTypes = {
  count: React.PropTypes.number,
  onComplete: React.PropTypes.func
}

module.exports = Countdown
