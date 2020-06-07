import React, { ChangeEvent } from 'react';
import { useRecoilState } from "recoil";
import { Todo, todosState } from "../state";

export const TodoList: React.FC = () => {
  const [todos, setTodo] = useRecoilState(todosState);

  const completeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    let id = e.target.value;
    let index = todos.findIndex(todo => todo.id == id);
    let todoList = [...todos];
    todoList[index] = { ...todoList[index], completed: !todoList[index].completed }
    setTodo(todoList);
  };

  const todoList = todos
    .filter(todo => !todo.completed)
    .map((todo) =>
      <li key={todo.id}>
        {todo.name}
        <input type="checkbox" value={todo.id} onChange={completeTodo} />
      </li>
    );
  return (<ul>{todoList} </ul>);
}
