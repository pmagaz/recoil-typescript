import React from 'react';
import { selector, useRecoilValue } from "recoil";
import { todosState } from "../state";

export const numTodosState = selector({
  key: 'numTodos', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});

export const NumTodos = () => {
  const numTodos = useRecoilValue(numTodosState);
  return <>Num todos: {numTodos}</>;
}
