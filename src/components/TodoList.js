import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo() {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  }

  function handleRemoveTodo(index) {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
