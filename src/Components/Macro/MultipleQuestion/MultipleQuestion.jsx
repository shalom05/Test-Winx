import React from 'react';
import './MultipleQuestion.css'
import TextCards from '../../Micro/TextCards/TextCards';


const MultipleQuestion = ({ }) => {
  return (
    <section className='Container3'>
      <h1>3/5</h1>
      <h1>¿Qué actividad prefieres hacer en tu tiempo libre?</h1>


      <div className='cards-multiple'>
        <TextCards></TextCards>
      </div>

      <h3>You Choose</h3>
      <p className='answer-text'>answer</p>

      <div className='Input-Buttons'>
        <button id='back'>Atrás</button>
        <button id='next'>Continuar</button>
      </div>
    </section>
  );
    
};

export default MultipleQuestion;