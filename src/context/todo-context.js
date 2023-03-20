import { createContext, useEffect, useState } from 'react';

const FILTER_MAP = {
  all: () => true,
  active: (todo) => !todo.isCompleted,
  done: (todo) => todo.isCompleted
};

export const TodoContext = createContext({
  todos: [],
  filterOption: 'all',
  addTodo: (todo) => { },
  removeTodo: (id) => { },
  updateTodoCompletion: (id) => { },
  setFilter: (opt) => { },
  getFilteredTodos: () => { }
});

function TodoContextProvider({ children }) {
  const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  const localStorageFilter = localStorage.getItem('filter');

  const [todos, setTodos] = useState(localStorageTodos || []);
  const [filterOpt, setFilterOpt] = useState(localStorageFilter || 'all');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("filter", filterOpt);
  }, [filterOpt]);


  function setFilter(opt) {
    setFilterOpt(opt.toLowerCase());
  }

  function getFilteredTodos() {
    return todos.filter(FILTER_MAP[filterOpt]);
  }

  function addTodo(todo) {
    setTodos(prevTodos => [todo, ...prevTodos]);
  }

  function removeTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function updateTodoCompletion(id) {
    setTodos(prevTodos => {
      const todoIndex = prevTodos.findIndex(todo => todo.id === id);

      const updatedIsCompleted = !prevTodos[todoIndex].isCompleted;

      const updatedTodos = [...prevTodos];

      updatedTodos[todoIndex] = {
        ...prevTodos[todoIndex],
        isCompleted: updatedIsCompleted
      };
      return updatedTodos;
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        filterOption: filterOpt,
        addTodo,
        removeTodo,
        updateTodoCompletion,
        setFilter,
        getFilteredTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;