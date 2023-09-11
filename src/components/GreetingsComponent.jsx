import React, { useState } from 'react';

const GreetingsComponent = () => {
  const [lang, setLang] = useState('en'); 
  const [name, setName] = useState(''); 

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const getGreetingText = () => {
    switch (lang) {
      case 'de':
        return `Hallo, ${name}!`;
      case 'en':
        return `Hello, ${name}!`;
      case 'es':
        return `¡Hola, ${name}!`;
      case 'fr':
        return `Bonjour, ${name}!`;
      default:
        return `Hello, ${name}!`;
    }
  };

  return (
    <div>
      
      <label htmlFor="langInput">Lang: </label>
      <select id="langInput" value={lang} onChange={handleLangChange}>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <br />
      <label htmlFor="nameInput">Name: </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
        placeholder="Nombre"
      />
      <div className="Greeting">{getGreetingText()}</div>
    </div>
  );
};

export default GreetingsComponent;
