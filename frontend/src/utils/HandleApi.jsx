import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);
// Get All Tasks
const getTodo = (setTodo) => {
  axios
    .get(`${baseUrl}`)
    .then(({ data }) => {
      setTodo(data);
    })
    .catch((error) => {
      console.log("Error Fetching Todos : ", error);
    });
};

// Add a Task to Database
const addTodo = (todoText, setTodoText, setTodo) => {
  if (todoText !== "") {
    axios
      .post(`${baseUrl}/save`, { text: todoText })
      .then((data) => {
        console.log("Task Added Successfully");
        setTodoText("");
        getTodo(setTodo);
      })
      .catch((error) => console.log("Task Creation Error : ", error));
  }
};

// Update Task
const updateTodo = (_id, input, setTodo) => {
  if (input !== "") {
    axios
      .post(`${baseUrl}/update`, { _id: _id, text: input })
      .then((data) => {
        console.log("Task Updated Successfully!");
        getTodo(setTodo);
      })
      .catch((error) => {
        console.log("Task Update Error : ", error);
      });
  }
};

// Delete a Task
const deleteTodo = (id, setTodo) => {
  if (id) {
    axios
      .delete(`${baseUrl}/delete/${id}`)
      .then((data) => {
        console.log("Task Deleted Successfully!");
        getTodo(setTodo);
      })
      .catch((error) => {
        console.log("Task Delete Error : ", error);
      });
  }
};

// Task Complete Toggle
const taskToggleHandler = (_id, setTodo) => {
  if (_id) {
    axios
      .post(`${baseUrl}/complete`, { _id: _id })
      .then((data) => {
        console.log("Task Toggled");
        getTodo(setTodo);
      })
      .catch((error) => {
        console.log("Toggle Error : ", error);
      });
  }
};

export { getTodo, addTodo, updateTodo, deleteTodo, taskToggleHandler };
