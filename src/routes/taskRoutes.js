const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/testing", (req, res) => {
  res.send("This is task routes");
});

router.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }

  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

router.put("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowed = ["description", "completed"];
  const isValid = updates.every((update) => res.send(allowed.includes(update)));

  if (!isValid) {
    res.status(400).send("Invalid Input(s)");
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });
    if (!task) return res.status(200).send();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.send("Task not found");

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
