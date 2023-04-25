const express = require('express')
const User = require('../models/users')
const router = express.Router()

router.get('/test', (req, res)=>{
    res.send('From another file')
})

router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      user.status(201).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  
    // user
    //   .save()
    //   .then(() => {
    //     res.status(201).send(user);
    //   })
    //   .catch((e) => {
    //     res.status(400).send(e);
    //   });
  });
  
router.get("/users", async (req, res) => {
    try {
      users = await User.find({});
      res.send(users);
    } catch (e) {
      res.status(500).send(e);
    }
  
    // User.find({})
    //   .then((users) => {
    //     res.send(users);
    //   })
    //   .catch((e) => {
    //     res.status(500).send();
    //   });
  });
  
router.get("/users/:id", async (req, res) => {
    const _id = req.params.id;
  
    try {
      const user1 = await User.findById(_id);
      res.send(user1);
    } catch (e) {
      res.status(500).send();
    }
  
    // User.findById(_id)
    //   .then((user) => {
    //     if (!user) {
    //       return res.status(404).send();
    //     }
  
    //     res.send(user);
    //   })
    //   .catch((e) => {
    //     res.status(500).send();
    //   });
  });
  
router.put("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowed = ["name", "email", "password", "age"];
    const isValid = updates.every((update) => allowed.includes(update));
  
    if (!isValid) {
      return res.send("Invalid input(s)");
    }
  
    const _id = req.params.id;
    try {
      const user1 = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user1) {
        return res.status(404).send();
      }
      res.send(user1);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });
  
router.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (user) {
        return res.send();
      }
  
      res.send(user);
    } catch (e) {
      res.staus(400).send(e);
    }
  });

module.exports = router