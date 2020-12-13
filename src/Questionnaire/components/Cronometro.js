import React, { useState, useEffect } from 'react';

import Clock from '../../Assets/Icons/clock.svg';

const Cronometro = (props) => {
    const [textTime, setTextTime] = useState('00:00');
    useEffect(() => {
        const newTime = timerHandler(props.time);
        setTextTime(newTime);
    }, [props.time])

    const timerHandler = (time) => {
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;


        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
    return (
        <div className="appBar_clock">
            <p>{textTime}</p>
            <img src={Clock} alt="" />
        </div>
    )
}

export default Cronometro;