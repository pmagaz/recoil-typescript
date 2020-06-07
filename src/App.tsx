

import React from 'react';
import './css/App.css';

import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { NumTodos } from './components/NumTodos';

const App = () => {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
      <NumTodos />
    </div>
  );
}

export default App;
