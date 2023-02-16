import react from "react";
import './CreateTodoButton.css';
function CreateTodoButton(){
    const onClickButton =() =>{
        alert('jajajaja')
    }
    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >
            + 

        </button>
    );
}

export { CreateTodoButton};