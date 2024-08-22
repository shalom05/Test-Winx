import React from 'react';
import '../SliderQuestion/SliderQuestion.css'
import Slidercards from '../../Micro/SliderCards/SliderCards';


const SliderQuestion = ({ }) => {
  return (
    <section className='Container5'>
      <h1>4/5</h1>
      <h1>¿Qué actividad prefieres hacer en tu tiempo libre?</h1>


      <div className='cards-slider'>
        <Slidercards></Slidercards>
      </div>

      <h3>You Choose</h3>
      <p className='answer-slider'>answer</p>

      <div className='Slider-Buttons'>
        <button id='back'>Atrás</button>
        <button id='next'>Continuar</button>
      </div>
    </section>
  );
    
};

export default SliderQuestion;