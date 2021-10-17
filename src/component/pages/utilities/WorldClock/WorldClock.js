import React from 'react'
import world_clock from '../../../../images/worldclock.png'
import line from '../../../../images/career-line.jpg'
import ClockApp from './ClockApp'

function WorldClock() {
    return (
        <div className='clock-container'>
            <img className='aboutBg' src={world_clock} />
            <div className='container'>
                <div className='content-area'>
                    <h1 className='title' style={{ textAlign: 'start' }} >World Clock</h1>
                    <img width='100%' src={line} />
                </div> 
                <div className='world-clock'>
                  <ClockApp/>
                </div>
                
            </div>
        </div>
    )
}

export default WorldClock
