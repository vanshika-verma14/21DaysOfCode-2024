import React, { useState } from 'eact';

const ButtonClicker = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Clicked!');
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};

export default ButtonClicker;
