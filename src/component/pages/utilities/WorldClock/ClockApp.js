import React from 'react'
import Clock from 'react-live-clock';



export default class ClockApp extends React.Component {
    render() {
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    }
}