import React from "react";
import { useMemo } from "react";
import line from '../../../images/career-line.jpg'
import { slideData } from "../../lowerslide/sliderData";

function Clients() {
  const lowerSlider = useMemo(() => {
    return slideData.map((item) => <img className='clients' src={item.image} alt='' />);
  },[]);

  return (
    <>
      <div className="aboutBg"> </div>
      <div class="wrapper">
        <h1 class="title"> Clients </h1>
        <img width='100%' src={line} alt='' />
        <div className="slider"> {lowerSlider} </div>
      </div>
    </>
  );
}

export default Clients;
