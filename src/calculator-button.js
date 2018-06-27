import React from "react";
import PropTypes from "prop-types";

export const CalculatorButton = ({value, clickOperation}) => {
  return (
    <div className="number-button" onClick={clickOperation}>
    {value}
    </div>
  )
}

CalculatorButton.propTypes = {
    value: PropTypes.string,
    clickOperation: PropTypes.func,
  };