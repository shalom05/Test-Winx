import React, { useState } from 'react';
import '../WinxIntro/WinxIntro.css'
import winxImage from '../../../assets/winx.jpg'; 

const WinxIntro = ({ onStart }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      onStart(); // Llama a onStart para iniciar el quiz cuando el correo sea válido
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  };

  const validateEmail = (email) => {
    // Expresión regular básica para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container1">
      <h1 className="title">¿Quieres saber qué Winx eres?</h1>
      <img src={winxImage} alt="Winx" className="winx-image" />
      <p className="subtitle">¿Alguna vez te has preguntado qué chica Winx encarna tu verdadera esencia? Este divertido quiz está diseñado para revelar cuál de las mágicas chicas Winx se asemeja más a tu personalidad</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Ingresa tu email"
          required
          className="input"
        />
        <button type="submit" className="button">Comenzar</button>
      </form>
    </div>
  );
};

export default WinxIntro;
