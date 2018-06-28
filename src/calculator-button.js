import React from "react";
import PropTypes from "prop-types";



export const CalculatorButton = ({value, clickOperation}) => {
  return (
    <span className="number-button" onClick={()=>clickOperation(value)}>
    {value}
    </span>
  )
}

CalculatorButton.propTypes = {
    value: PropTypes.any,
    clickOperation: PropTypes.func,
  };