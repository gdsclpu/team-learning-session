import "./App.css";

import { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Do coding",
      isDone: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return todo;
    });

    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="text-center text-5xl py-10 text-blue-500 font-extrabold">
        Todo App
      </h1>

      <div className="w-3/5 flex flex-col items-center justify-center gap-5 mx-auto mt-20">
        <Form addTodo={addTodo} todos={todos} />

        <Table
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
