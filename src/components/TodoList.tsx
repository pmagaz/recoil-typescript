import React, { ChangeEvent } from 'react';
import { useRecoilState } from "recoil";
import { Todo, todosState } from "../state";

const updateTodo = (tasks: Todo[], key: number, newTask: Todo) => {
  return [...tasks.slice(0, key), newTask, ...tasks.slice(key + 1)]
}

export const TodoList: React.FC = () => {
  const [todos, setTodo] = useRecoilState(todosState);

  const completeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    let id = e.target.value;
    let index = todos.findIndex(todo => todo.id == id);
    let newArray = [...todos];
    newArray[index] = { ...newArray[index], completed: !newArray[index].completed }
    setTodo(newArray);
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
