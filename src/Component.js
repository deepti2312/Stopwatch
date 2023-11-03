import './Component.css'
import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';


function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [reverse, setReverse] = useState(true)

    useEffect(() => {
        let intervalId;
        if (!reverse) {
            if (isRunning) {
                intervalId = setInterval(() => setTime(time - 1), 10)
            }
        } else {
            if (isRunning) {
                intervalId = setInterval(() => setTime(time + 1), 10)
            }
        } return () => clearInterval(intervalId);

    }, [isRunning, time, reverse])

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    const reset = () => {
        setIsRunning(false)
        setTime(0)
        setReverse(true)
    }

    const start = () => {
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
    }

    const updatetime = (i) => {
        setTime(i)
        setReverse(false)

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
                    isRunning ? <button data-testid="stopButton" className="startBtn" onClick={stop}>stop</button> :
                        <button data-testid="startButton" className="stopBtn" onClick={start}>start</button>
                }
                <button data-testid="resetButton" className="resetBtn" onClick={reset}>reset</button>
            </p>

            <div className='timeBtn'>
                <h5>Set Time for Reverse</h5>
                <button className="Btn5" onClick={() => updatetime(29959)}>5 min</button>
                <button className="Btn10" onClick={() => updatetime(59959)}>10 min</button>
                <button className="Btn15" onClick={() => updatetime(89959)}>15 min</button>
                <button className="Btn30" onClick={() => updatetime(179959)}>30 min</button>
            </div>
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
                {displayedTimeZones.map((name) => <button className="Btn" key={name} onClick={() => changeTime(name)}>{name}</button>)}
            </div>
            <div>
                {countries.length > itemsperpage && (

                    <div className='Btns' div="true">
                        <button data-testid="pre-button" className="Btn1" onClick={() => changePage(currentpage - 1)} disabled={currentpage === 0}>
                            <i className="fa fa-arrow-circle-left"></i>
                        </button>
                        <button data-testid="last-button" className="Btn2" onClick={() => changePage(currentpage + 1)} disabled={endIndex >= countries.length}>
                            <i className="fa fa-arrow-circle-right"></i>
                        </button>
                    </div>

                )}
            </div >

        </>
    )
}

export { Stopwatch, Currenttime };
