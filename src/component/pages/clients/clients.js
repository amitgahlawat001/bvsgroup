import React from 'react'
import { useMemo } from 'react'
import { slideData } from '../../lowerslide/sliderData'

function Clients() {

    const lowerSlider = useMemo(() => {
        return slideData.map((item) => 
        <img src={item.image}/>)
    })

    return (
        <>
             <div className="aboutBg">
            </div>
            <div class="wrapper">
                <h1 class="title">Clients</h1>
                <div className="slider">
                {lowerSlider}
                </div>
            </div>
        </>
    )
}

export default Clients