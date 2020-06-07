## Example of use of React Recoil

This example uses [Recoil](https://recoiljs.org/) and [Typescript](https://www.typescriptlang.org/) for a simple stage magament with Recoil. Just a basic todo list. 

### Installing

Clone the repository & install dependencies:
```
$ git clone https://github.com/pmagaz/recoil-example
$ yarn / npm install
```

### Starting Example

This example was created using create-react-app so you can run web server as follows:
```
$ yarn start
```

### Files

* `state.ts` Definition of the stage. Just an Array of todos.
* `NewTodo.tsx` Add a new todo to the state.
* `TodoList.tsx` List of todos.
* `NumTodos.tsx` Count active todos.


### Warning

Recoil API is still in early stages. DON'T use it in production.