import React from 'react';
import { selector, useRecoilValue } from "recoil";
import { todosState } from "../state";

export const numTodosState = selector({
  key: 'numTodos',
  get: ({ get }) => (get(todosState).length)
});

export const NumTodos: React.FC = () => {
  const numTodos = useRecoilValue(numTodosState);
  return <div>Num todos: {numTodos}</div>;
}
