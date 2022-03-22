import React, { Component } from "react";
import './Timer.css'

const timer = (WrappedComponent, initialTimer) => {
    class NewComponent extends Component {
        constructor() {
            super();

            this.state = {
                seconds: '00',
                minutes: initialTimer
            }
            this.stopCountDown = this.stopCountDown.bind(this);
            this.tick = this.tick.bind(this);
            this.startCountDown = this.startCountDown.bind(this);

        }

        tick() {
            var min = Math.floor(this.secondsRemaining / 60);
            var sec = this.secondsRemaining - (min * 60);
            this.setState({
                minutes: min,
                seconds: sec
            })
            if (sec < 10) {
                this.setState({
                    seconds: "0" + this.state.seconds,
                })
            }
            if (min < 10) {
                this.setState({
                    minutes: "0" + min,
                })
            }
            if (min === 0 & sec === 0) {
                clearInterval(this.setIntervalId);
            }
            this.secondsRemaining--
        }

        startCountDown()  {
            this.setIntervalId = setInterval(this.tick, 1000)
            let time = this.state.minutes;
            this.secondsRemaining = time * 60
        }

        stopCountDown() {
            clearInterval(this.setIntervalId);
        }

        resetCountdown = () => {
            this.setState(() => {
                return {minutes: initialTimer, seconds:"00"}
            })
        }
        


        render() {
            return (
                <div className="timerContainer">
                    <WrappedComponent
                     {...this.props}
                      minutes={this.state.minutes}
                       seconds={this.state.seconds}
                        timerStarts={this.startCountDown}
                        timerStop = {this.stopCountDown} 
                        timerReset = {this.resetCountdown}/>
                </div>
            )
        }
    }
    return NewComponent;
}
export default timer;