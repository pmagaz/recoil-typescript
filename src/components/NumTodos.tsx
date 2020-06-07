import React from 'react';
import { selector, useRecoilValue } from "recoil";
import { todosState } from "../state";

export const numTodosState = selector({
  key: 'numTodos',
  get: ({ get }) => {
    let todos = get(todosState);
    return todos.filter(todo => !todo.completed).length;
  }
});

export const NumTodos: React.FC = () => {
  const numTodos = useRecoilValue(numTodosState);
  return <div>Active todos: {numTodos}</div>;
}
