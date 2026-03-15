import React from 'react';
import './myButton.css'; 

const CustomButton = ({ onClick, children, type = 'button', variant = 'primary' }) => {
  return (
    <button 
      className={`custom-button ${variant}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;