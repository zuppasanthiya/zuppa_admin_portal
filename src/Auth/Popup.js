import React from 'react';
import "./Popup.css";


const Popup = ({ message, show }) => {
    return (
      <div className={`popup ${show ? 'show' : ''}`}>
        {message}
      </div>
    );
  };
  
  export default Popup;