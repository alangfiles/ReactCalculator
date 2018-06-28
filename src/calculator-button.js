import React from "react";
import PropTypes from "prop-types";



export const CalculatorButton = ({value, clickOperation, className}) => {
  return (
    <span className={className} onClick={()=>clickOperation(value)}>
    {value}
    </span>
  )
}

CalculatorButton.propTypes = {
    value: PropTypes.any,
    clickOperation: PropTypes.func,
    className: PropTypes.string
  };