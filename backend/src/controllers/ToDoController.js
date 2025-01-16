const ToDoModel = require("../models/ToDo.models");

// GET All Tasks
getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

// Save(Create) Tasks to DB
saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then((data) => {
      console.log("Task Added Successfully to the Database!");
      console.log(data);
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log("Task Creation Error : ", error);
      res.status(400).send(error);
    });
};

// Update Tasks
updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findOneAndUpdate({ _id: _id }, { $set: { text: text } })
    .then((data) => {
      console.log("Task Updated Successfully!");
      console.log(data);
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log("Task Update Error : ", error);
      res.status(400).send(error);
    });
};

// Delete Tasks
deleteTodo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.deleteOne({ _id: _id })
    .then((data) => {
      console.log("Task Deleted Successfully");
      console.log(data);
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log("Task Delete Error : ", error);
      res.status(400).send(error);
    });
};

// Task Complete (Toggle)
todoComplete = async (req, res) => {
  const { _id } = req.body;
  try {
    const todo = await ToDoModel.findById({ _id: _id });
    if (!todo) {
      console.log("Todo Not Found");
      res.status(400).send(`The Todo with the id ${_id} could not be found`);
    }
    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();
    res.send(updatedTodo);
  } catch (error) {
    console.log("Toggle Error : ", error);
  }
};

module.exports = { getToDo, saveToDo, updateTodo, deleteTodo, todoComplete };
