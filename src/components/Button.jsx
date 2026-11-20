import React from "react";

const Button = ({ text, color = 'gray', children }) => {
  return (
    <button style={{ color: color }}>
      {text}-{color}
      {children}
    </button>
  )
}

export default Button