import './App.css';
import TodList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        <h2>Tasks</h2>
        <TodList />
      </main>

      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );
}

export default App;
