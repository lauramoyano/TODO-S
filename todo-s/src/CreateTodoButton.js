import react from "react";
import './CreateTodoButton.css';
function CreateTodoButtom(){
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

export { CreateTodoButtom};