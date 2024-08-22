import React from 'react';
import '../SliderCards/SliderCards.css'

const Slidercards = ({ }) => {
  return (

    <div className='All'>
        <h3>Del 1 al 10</h3> 
     <div className='Agg'>
        
      <input type="range" min="1" max="10" defaultValue="5"/>

     </div>
    </div>
  );
};

export default Slidercards;