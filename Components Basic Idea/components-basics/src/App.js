import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <main>
      <TodoList></TodoList>
      </main>

      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );
}

export default App;
