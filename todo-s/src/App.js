import logo from './logo.svg';

import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";


const todos =[
  {text: 'cortar cebolla', completed: false},
  {text: 'bailar', completed: false},
  {text: 'comer', completed: false},
];

function App() {
  return (
    <React.Fragment>
    
    <TodoCounter />
     
    <TodoSearch />
    <TodoList >
      {todos.map(todo =>(
        <TodoItem  key ={todo.text} text ={todo.text}
        completed = {todo.completed}
        />
      ))}
    </TodoList>
    < CreateTodoButtom />
  
    </React.Fragment>
  );
}

export default App;
