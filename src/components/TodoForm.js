import React from "react";

const TodoForm = ({ handleSubmit, setTodo, todo, editId }) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">{editId ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
