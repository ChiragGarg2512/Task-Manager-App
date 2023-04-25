const express = require("express");
require("./db/mongoose");
const Task = require("./models/tasks");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
