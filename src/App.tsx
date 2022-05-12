import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
}>;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    id: 0,
    text: "",
    done: false,
  });
  function toggleDone(todoArg: Todo) {
    setTodos(todos.map((todo) => {
      return todoArg.id === todo.id ? { ...todo, done: !todo.done } : todo;
    }))
  }
  function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodos((prevState) => [...prevState, { ...newTodo, id: todos.length }]);
  }

  
  return (
    <div className="App">
      <div>
        <h2>Todos</h2>
        {todos.length !== 0 ? (
          todos.map(
            (todo: Todo): JSX.Element => (
              <div key={todo.id}>
                <input
                  onClick={() => toggleDone(todo)}
                  type="checkbox"
                  checked={todo.done}
                  onChange={handleChecked}
                />{" "}
                <span className={todo.done ? "done" : ""}>{todo.text}</span>
                <br />
              </div>
            )
          )
        ) : (
          <>Add new todo</>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={newTodo.text}
          onChange={handleChange}
        />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  );
}

export default App;
