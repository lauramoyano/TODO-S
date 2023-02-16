import react from "react";
import './TodoItem.css';

function TodoItem(props) {
  const onClickCheck =() =>{
    alert('jajajaja' + props.text)
}
const onClickDelete =() =>{
  alert('jajajaja' + props.text)
}
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick ={onClickCheck}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
        {props.text}
      </p>
      <span className="Icon Icon-delete"  onClick ={onClickDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };