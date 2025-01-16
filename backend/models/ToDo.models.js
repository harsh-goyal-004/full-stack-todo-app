const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", toDoSchema);
