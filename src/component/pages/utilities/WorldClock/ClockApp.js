import React from "react";
import Clock from "react-live-clock";
import PropTypes from 'prop-types'

function ClockApp({ format = "HH:mm:ss", timezone = "US/Pacific", ...props }) {

  return <Clock format={format} ticking={true} timezone={timezone} />;
}

ClockApp.propTypes = {
  format: PropTypes.string,
  timezone: PropTypes.string,
};
export default ClockApp;
