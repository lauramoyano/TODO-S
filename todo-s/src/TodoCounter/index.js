import React from "react";
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <React.Fragment>
        <h1 className="Titulo"> TODO's</h1>
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO's </h2>
        </React.Fragment>
    )
}

export {TodoCounter};