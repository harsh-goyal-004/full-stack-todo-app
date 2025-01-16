import { useEffect, useState } from "react";
import { getTodo } from "./utils/HandleApi";
import TodoInput from "./components/TodoInput";
import TaskContainer from "./components/TodoContainer";
import { FaSpinner } from "react-icons/fa";

function App() {
  const [todos, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    getTodo(setTodo);
  }, []);
  console.log(todos);

  return (
    <>
      {todos.length > 1 ? (
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoInput
                todoText={todoText}
                setTodoText={setTodoText}
                setTodo={setTodo}
              />
            </div>
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="mb-4" key={todo._id}>
                <TaskContainer todo={todo} setTodo={setTodo} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Loader
        <div className="h-screen w-full bg-[#172842] text-white flex justify-center items-center">
          <div>
            <FaSpinner className="animate-spin text-4xl" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
