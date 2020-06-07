import { atom } from "recoil";

const initialState: String[] = [];

export const todosState = atom({
  key: 'todos',
  default: initialState,
});