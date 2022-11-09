import React from 'react'

const Button = ({ value, type, buttonStyle, label, onClick }) => {
  const handleButtonClick = () => {
    onClick(value, type)
  }

  return (
    <button name={value} className={buttonStyle} onClick={handleButtonClick}>
      {label}
    </button>
  )
}

export default Button
