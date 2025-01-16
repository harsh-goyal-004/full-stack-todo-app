import { useState } from "react";
import { deleteTodo, taskToggleHandler, updateTodo } from "../utils/HandleApi";

function TaskContainer({ todo, setTodo }) {
  const [input, setInput] = useState(todo.text);
  const [editable, setEditable] = useState(false);

  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
        key={todo._id}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={() => taskToggleHandler(todo._id, setTodo)}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            editable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly={!editable || todo.completed}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (!editable) {
              setEditable(true);
            } else {
              // UpdateTask Function
              updateTodo(todo._id, input, setTodo);
              setEditable(false);
            }
          }}
          disabled={todo.completed}
        >
          {editable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo._id, setTodo)}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TaskContainer;
