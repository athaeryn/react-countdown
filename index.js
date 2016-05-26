var React = require('react')

var Countdown = React.createClass({
  interval: undefined,

  getInitialState: function () {
    return {
      count: this.props.count
    }
  },

  addTime: function (seconds) {
    this.stopCountdown()
    this.setState({ count: this.state.count + seconds })
    this.startCountdown()
  },

  startCountdown: function () {
    this.interval = setInterval(function () {
      let count = this.state.count - 1
      if (count === 0) {
        this.stopCountdown()
        this.props.onComplete()
      } else {
        this.setState({count})
      }
    }.bind(this), 1000)
  },

  stopCountdown: function () {
    clearInterval(this.interval)
  },

  componentDidMount: function () {
    this.startCountdown()
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
