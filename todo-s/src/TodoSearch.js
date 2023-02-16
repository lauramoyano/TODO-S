import react from "react";
import './TodoSearch.css';

function TodoSearch(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
      };
    return(
        <input className="TodoSearch" type="text"
        placeholder="Search here" 
        onChange={onSearchValueChange}
        />
    );
}
export {TodoSearch};