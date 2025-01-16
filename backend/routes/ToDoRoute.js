const express = require("express");
const {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
  todoComplete,
} = require("../controllers/ToDoController");
const router = express.Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateTodo);

router.delete("/delete", deleteTodo);

router.post("/complete", todoComplete);

module.exports = router;
