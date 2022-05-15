import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem, { Todo } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    id: 0,
    text: "",
    done: false,
  });
  function handleDelete(todoArg: Todo) {
    setTodos(todos.filter((todo) => todoArg.id !== todo.id));
  }
  function handleToggle(todoArg: Todo) {
    setTodos(
      todos.map((todo) => {
        return todoArg.id === todo.id ? { ...todo, done: !todo.done } : todo;
      })
    );
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, { ...newTodo, id: todos.length }]);
  }

  return (
    <div className="App">
      <>
        <h2>Todos</h2>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              onDelete={() => handleDelete(todo)}
              onToggleDone={() => handleToggle(todo)}
            />
          ))
        ) : (
          <>Add new todo</>
        )}
      </>
      <TodoForm text={newTodo.text} onSubmit={handleSubmit} onValueChange={handleChange} />
    </div>
  );
}

export default App;
