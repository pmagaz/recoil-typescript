import React, { useState } from 'react';
import { useRecoilState } from "recoil";
import { todosState, todoNameState } from '../state';

export const NewTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  const onChange = (event) => {
    let todoName = event.target.value;
    setTodoName(todoName);
  };

  const onSave = (event) => {
    setTodos(todoList => [...todoList, todoName]);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <input type="button" value="Add" onClick={onSave} />
    </div>
  );
}


