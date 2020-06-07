import React from 'react';
import { useRecoilValue } from "recoil";
import { todosState } from "../state";

export const TodoList: React.FC = () => {
  const todos = useRecoilValue(todosState);

  const todoList = todos.map((item, key) =>
    <li key={key}>{item}</li>
  );

  return (<ul> {todoList} </ul>);
}
