import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: '00', seconds: '00', isRunning: false}

  componentDidMount() {
    this.timerId = setInterval(this.onUpdate, 1000)
  }

  onStart = () => this.setState({isRunning: true})

  onStop = () => this.setState({isRunning: false})

  onReset = () =>
    this.setState({isRunning: false, minutes: '00', seconds: '00'})

  onUpdate = () => {
    const {isRunning, minutes, seconds} = this.state
    if (isRunning) {
      if (Number(seconds) < 9) {
        this.setState({
          seconds: '0'.concat((Number(seconds) + 1).toString()),
        })
      } else if (Number(seconds) >= 9 && Number(seconds) < 59) {
        this.setState({
          seconds: (Number(seconds) + 1).toString(),
        })
      } else if (Number(seconds) === 59 && Number(minutes) < 9) {
        this.setState({
          seconds: '00',
          minutes: '0'.concat((Number(minutes) + 1).toString()),
        })
      } else if (Number(seconds) === 59 && Number(minutes) >= 9) {
        this.setState({
          seconds: '00',
          minutes: (Number(minutes) + 1).toString(),
        })
      }
    }
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="mainContainer">
        <div className="contentContainer">
          <h1>Stopwatch</h1>
          <div className="timerContainer">
            <p className="timerPara">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />{' '}
              Timer
            </p>
            <h1>
              {minutes}:{seconds}
            </h1>
            <div className="buttonContainer">
              <button
                onClick={this.onStart}
                className="StartButton"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStop}
                className="StopButton"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onReset}
                className="ResetButton"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
