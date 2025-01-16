import React from "react";
import { addTodo } from "../utils/HandleApi";

function TodoInput({ todoText, setTodoText, setTodo }) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          onClick={() => {
            addTodo(todoText, setTodoText, setTodo);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
