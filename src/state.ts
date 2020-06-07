import { atom } from "recoil";

export interface Todo {
  id: string,
  name: string;
  completed: boolean;
}

const initialState: Todo[] = [];

export const todosState = atom({
  key: 'todos',
  default: initialState,
});