import React from 'react';
import '../MultipleChoiceQuestion/MultipleChoiceQuestion.css'
import { MultipleChoiceCards } from '../../Micro/MultipleChoiceCards/MultipleChoiceCards';

const MultipleChoiceQuestion = ({ }) => {
  return (
    <section className='Container2'>
      <h1>1/5</h1>
      <h1>Elige una paleta de colores que te represente</h1>

      <div className='cards-multiple'>
        <MultipleChoiceCards></MultipleChoiceCards>
      </div>

      <h3>You Choose</h3>
      <p className='answer-choice'>answer</p>

      <div className='Multi-Buttons'>
        <button id='back'>Atrás</button>
        <button id='next'>Continuar</button>
      </div>
    </section>
  );
    
};

export default MultipleChoiceQuestion;
