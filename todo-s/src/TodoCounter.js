import React from "react";
import './TodoCounter.css';
function TodoCounter(){
    return(
        <React.Fragment>
        <h1 className="Titulo"> TODO's</h1>
        <h6 className="TodoCounter"> Has complentado 2 de 3 ToDos </h6>
        </React.Fragment>
    )
}

export {TodoCounter};