import React from 'react';
import { selector, useRecoilState } from "recoil";
import { todosState } from "../state";

// export const numTodosState = selector({
//   key: 'numTodos', // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const todos = get(todosState);
//     return todos.length;
//   },
// });

export const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const todoList = todos.map((item, key) =>
    <li key={key}>{item}</li>
  );
  return (<ul>
    {todoList}
  </ul >
  );
}
