import { useState } from "react";

const Form = ({ addTodo, todos }) => {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoName) return alert("Please enter a todo name");

    const todo = {
      id: todos.length + 1,
      name: todoName,
      isDone: false,
    };

    addTodo(todo);
    setTodoName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-center  flex-row gap-2"
    >
      <input
        type="text"
        className="border-blue-500 border-2 px-3 py-2 w-4/5"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="Add todo"
      />
      <button className="bg-blue-500 text-white font-bold p-2 hover:bg-blue-800 transition-all">
        + Add
      </button>
    </form>
  );
};

export default Form;
