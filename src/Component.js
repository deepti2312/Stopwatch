import React, { useState, useEffect } from "react";
import moment from 'moment';


export default function Stopwatch() {
    let initialTime = "00:00:00"
    const [time, setTime] = useState(initialTime);
    const [country, setCountry] = useState("India");
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        isRunning ?
            setInterval(() => setTime(moment().format("LTS")), 1000) :
            setTime(initialTime)
    })

    const france = () => {
        setInterval(() => setTime(moment().format("LTS")), 1000)
    }
    const reset = () => {
        setIsRunning(false)
        setTime(initialTime)
    }

    const start = () => {
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
        clearInterval()
    }

    return (
        <div>
            <br />
            <div>
                {country}
            </div><br />
            <div>
                {time}
            </div>
            <div><br />
                {
                    isRunning ? <button onClick={stop}>stop</button> :
                        <button onClick={start}>start</button>
                }
                <button onClick={reset}>reset</button>
            </div><br />
            <div>
                <button onClick={france}>France</button>
                <button>US</button>
                <button>UK</button>
                <button>Canada</button>
            </div>
            <div>

            </div>
        </div>
    )
}
