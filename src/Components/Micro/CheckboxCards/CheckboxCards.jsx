import React from 'react';
import '../CheckboxCards/CheckboxCards.css';

export function CheckboxCards({}) {
  return (
    <div className='card-container1 '>
        <input type="checkbox" id="color-checkbox"/>
        <p>Color</p>
    </div>
  );
}

export default CheckboxCards;