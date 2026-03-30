import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Performance Assessment: State and Hooks</h1>

      <section className="card">
        <h2>Task 1: Simple Counter</h2>
        <Counter />
      </section>

      <section className="card">
        <h2>Task 2: Form Input</h2>
        <TextInput />
      </section>

      <section className="card">
        <h2>Task 3: Todo List</h2>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
