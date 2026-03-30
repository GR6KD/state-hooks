import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
      />
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default TextInput;
