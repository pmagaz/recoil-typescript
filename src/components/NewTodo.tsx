import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState } from "recoil";
import { todosState } from '../state';

export const NewTodo: React.FC = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let todoName = e.target.value;
    setTodoName(todoName);
  };

  const onSave = (e: MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTodos(currentList => [...currentList, todoName]);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <input type="button" value="Add" onClick={onSave} />
    </div>
  );
}


