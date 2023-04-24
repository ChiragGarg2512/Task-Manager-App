const mongoose = require("mongoose");

const client = mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const task1 = new tasks({
//   description: "Exercise    ",
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const me = new user({
//   name: "    Chirag G",
//   email: "Chirag@gmail.com",
//   password: "goforit",
//   age: 19,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
