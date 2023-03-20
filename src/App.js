import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import TodoContextProvider from './context/todo-context';

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <main>
        <Todos />
      </main>
    </TodoContextProvider>
  );
}

export default App;
