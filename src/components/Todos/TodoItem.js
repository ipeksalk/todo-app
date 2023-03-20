import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import classes from './TodoItem.module.css';

function TodoItem({ text, isCompleted, onRemove, onUpdateStatus }) {

  return (
    <li className={classes.item}>
      <button onClick={onUpdateStatus}>
        {isCompleted ? <FiCheckCircle /> : <FiCircle />}
      </button>
      <p className={`${isCompleted ? classes.completed : undefined}`}>{text}</p>
      <button onClick={onRemove}><FiTrash2 color='red' /></button>
    </li>
  );
}

export default TodoItem;