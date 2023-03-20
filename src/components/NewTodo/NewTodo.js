import { useContext, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TodoContext } from '../../context/todo-context';
import classes from './NewTodo.module.css';

function NewTodo() {
  const { addTodo } = useContext(TodoContext)
  const todoInputRef = useRef();
  
  function handleSubmit(event) {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;
    if (enteredTodo.trim().length > 0) {
      const newTodo = {
        id: Math.random(),
        text: enteredTodo,
        isCompleted: false
      };
      addTodo(newTodo);
      todoInputRef.current.value = '';
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input type='text' ref={todoInputRef} />
      <button><AiOutlinePlus /></button>
    </form>
  );
}

export default NewTodo;