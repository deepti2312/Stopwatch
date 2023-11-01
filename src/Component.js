import './Component.css'
import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';


function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 1), 10)
        } return () => clearInterval(intervalId);
    }, [isRunning, time])

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    const reset = () => {
        setIsRunning(false)
        setTime(0)
    }

    const start = () => {
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
    }

    return (
        <div className='time'>
            <p>
                {hours}:{minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </p>
            <p>
                {
                    isRunning ? <button className="startBtn" onClick={stop}>stop</button> :
                        <button className="stopBtn" onClick={start}>start</button>
                }
                <button className="resetBtn" onClick={reset}>reset</button>
            </p>
        </div>
    )
}

function Currenttime() {
    const [zone, setZone] = useState("Asia/Kolkata")
    const [time, setTime] = useState(moment().tz(zone).format("LTS"));
    const countries = moment.tz.names()

    useEffect(() => {
        let clear = setInterval(() => {
            setTime(moment().tz(zone).format("LTS"))
        })
        return () => clearInterval(clear)
    }, [zone])

    const changeTime = (country) => {
        setZone(country)

    }

    return (
        <>
            <div className="time">
                <p>{zone}</p>
                <p>{time}</p>
            </div>
            <div className='grid'>
                {countries.map((name) => <button className="Btn" onClick={() => changeTime(name)}>{name}</button>)}
            </div>
        </>
    )
}

export { Stopwatch, Currenttime };