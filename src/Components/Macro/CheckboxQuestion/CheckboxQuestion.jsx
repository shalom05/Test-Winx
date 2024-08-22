import React from 'react';
import '../CheckboxQuestion/CheckboxQuestion.css';
import CheckboxCards from '../../Micro/CheckboxCards/CheckboxCards';

const CheckboxQuestion = ({ }) => {
  return (
    <section className='Container6'>
      <h1>5/5</h1>
      <h1>Elige tus hobbies favoritos</h1>

      <div className='cards-checkbox'>
        <CheckboxCards></CheckboxCards>
      </div>

      <h3>You Choose</h3>
      <p className='answer-checkbox'>answer</p>

      <div className='Checkbox-Buttons'>
        <button id='back'>Atrás</button>
        <button id='next'>Continuar</button>
      </div>
    </section>
  );
    
};

export default CheckboxQuestion;