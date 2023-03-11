const Table = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <table className="mt-5 w-4/5">
      <thead className="py-3">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => {
          return (
            <tr className="text-center " key={index}>
              <td className="py-2">{todo.id}</td>
              <td className="py-2">{todo.name}</td>
              <td className="py-2 flex gap-2 items-center justify-center">
                {todo.isDone ? (
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white font-bold p-1 px-2 hover:bg-red-800 transition-all"
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className="bg-blue-500 text-white font-bold p-1 px-2 hover:bg-blue-800 transition-all"
                  >
                    Done
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
