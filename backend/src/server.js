require("dotenv").config({ path: "./.env" });
const express = require("express");
const dbConnect = require("./db/index");
const route = require("../routes/ToDoRoute");

const app = express();
const port = process.env.PORT || 3000;

// Execute DB Connection Function
dbConnect();

app.use(route);

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});
