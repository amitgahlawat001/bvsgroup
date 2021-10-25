import React from 'react'
import world_clock from '../../../../images/worldclock.png'
import line from '../../../../images/career-line.jpg'
import ClockApp from './ClockApp'
import './ClockApp.css'

function WorldClock() {
    return (
        <div className='clock-container'>
            <img className='aboutBg' src={world_clock} />
            <div className='wrapper'>
                <div className='content-area'>
                    <h1 className='title' style={{ textAlign: 'start' }} >World Clock</h1>
                    <img width='100%' src={line} />
                </div> 
                <div className='world-clock'>
                  <h3>USA<br/><ClockApp timezone='US/Pacific'/></h3>
                  <h3>Australia<br/><ClockApp timezone='Australia/Sydney'/></h3>
                  <h3>India<br/><ClockApp timezone='India/NewDelhi'/></h3>
                  <h3>China<br/><ClockApp timezone='Asia/Shanghai'/></h3>
                  <h3>Japan<br/><ClockApp timezone='Japan'/></h3>
                  <h3>Korea<br/><ClockApp timezone='ROK'/></h3>
                </div>    
            </div>
        </div>
    )
}

export default WorldClock
