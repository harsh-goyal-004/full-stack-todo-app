require("dotenv").config({ path: "./.env" });
const express = require("express");
const dbConnect = require("./db/index");
const route = require("../src/routes/ToDoRoute");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Execute DB Connection Function
dbConnect();

// Middlewares
app.use(express.json());
app.use(route);
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});
