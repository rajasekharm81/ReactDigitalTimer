import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
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
            <h1>00:00</h1>
            <div className="buttonContainer">
              <button className="StartButton" type="button">
                Start
              </button>
              <button className="StopButton" type="button">
                Stop
              </button>
              <button className="ResetButton" type="button">
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
