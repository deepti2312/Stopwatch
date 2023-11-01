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
    const [currentpage, setCurrentpage] = useState(0);
    const countries = moment.tz.names();
    let itemsperpage = 16

    const startIndex = currentpage * itemsperpage;
    const endIndex = startIndex + itemsperpage;
    const displayedTimeZones = countries.slice(startIndex, endIndex);


    useEffect(() => {
        let clear = setInterval(() => {
            setTime(moment().tz(zone).format("LTS"))
        })
        return () => clearInterval(clear)
    }, [zone])

    const changeTime = (country) => {
        setZone(country)

    }

    const changePage = (page) => {
        setCurrentpage(page)
    }

    return (
        <>
            <div className="time">
                <p>{zone}</p>
                <p>{time}</p>
            </div>
            <div className='grid'>
                {displayedTimeZones.map((name) => <button className="Btn" onClick={() => changeTime(name)}>{name}</button>)}
            </div>
            <div>
                {countries.length > itemsperpage && (

                    <div div className='Btns'>
                        <button className="Btn1" onClick={() => changePage(currentpage - 1)} disabled={currentpage === 0}>
                            <i class="fa fa-arrow-circle-left"></i>
                        </button>
                        <button className="Btn2" onClick={() => changePage(currentpage + 1)} disabled={endIndex >= countries.length}>
                            <i class="fa fa-arrow-circle-right"></i>
                        </button>
                    </div>

                )}
            </div >

        </>
    )
}

export { Stopwatch, Currenttime };
