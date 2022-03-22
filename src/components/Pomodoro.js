import React, { Component } from "react";
import timer from "./Timer";
import "./Pomodoro.css";

class Pomodoro extends Component {
    render() {
        const {minutes, seconds, timerStarts, timerStop, timerReset} = this.props
        return(
        <div className="pomodoroContainer">
            <button className="timerButton">Pomodoro</button>
            <h1>{minutes} : {seconds}</h1>
            <button className="startBtn" onClick={timerStarts}>START</button>
            <button className="startBtn" onClick={timerStop}>STOP</button>
            <button className="startBtn" onClick={timerReset}>RESET</button>
        </div>
        ) 
    }
}
export default timer(Pomodoro, 25);