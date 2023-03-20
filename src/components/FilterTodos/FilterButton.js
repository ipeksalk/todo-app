import { useContext } from 'react';
import { TodoContext } from '../../context/todo-context';
import classes from './FilterButton.module.css';

function FilterButton({ name }) {
  const { filterOption, setFilter } = useContext(TodoContext);

  function handleClick() {
    setFilter(name);
  }
  
  return (
    <button
      onClick={handleClick}
      className={`${classes.button} ${filterOption === name ? classes.active : ''}`}
    >
      {name.toUpperCase()}
    </button>
  )
}

export default FilterButton;