const mongoose = require("mongoose");
const validator = require("validator");

const client = mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const user = mongoose.model("user", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is incorrect");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("password cannot contain 'password'");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age can not be negative");
//       }
//     },
//   },
// });

const tasks = mongoose.model("tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task1 = new tasks({
  description: "Exercise    ",
});

task1
  .save()
  .then(() => {
    console.log(task1);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

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
