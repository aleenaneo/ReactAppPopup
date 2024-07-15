import React, { useState } from 'react';
import './Popup.css'; // Import the CSS for styles

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <button className="open-popup-btn" onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <h2>Popup Content</h2>
          <p>This is a simple popup in React.</p>
          <button className="close-popup-btn" onClick={togglePopup}>Close Popup</button>
        </div>
      )}
    </div>
  );
};

export default Popup;
