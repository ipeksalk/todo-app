import { useContext } from 'react';
import FilterTodos from '../FilterTodos/FilterTodos';
import NewTodo from '../NewTodo/NewTodo';
import TodoItem from './TodoItem';
import { TodoContext } from '../../context/todo-context';
import classes from './Todos.module.css';

function Todos() {
  const {
    getFilteredTodos,
    removeTodo,
    updateTodoCompletion
  } = useContext(TodoContext);

  const todos = getFilteredTodos();

  let todoList = (
    <h2
      style={{ textAlign: 'center' }}
    >
      No todos found.
    </h2>
  );

  if (todos.length > 0) {
    todoList = (
      <ul className={classes.todos}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onRemove={removeTodo.bind(null, todo.id)}
            onUpdateStatus={updateTodoCompletion.bind(null, todo.id)}
          />
        ))}
      </ul>
    );
  }

  return (
    <section className={classes.container}>
      <NewTodo />
      <FilterTodos />
      {todoList}
    </section>
  );
}

export default Todos;