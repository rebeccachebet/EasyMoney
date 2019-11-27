const express = require("express");
const router = express.Router();
const Register = require("../models/adminmodel");

const mongoose = require("mongoose");

/* Routes */
//Get reads the registerform.pug and displays it on the path

// const Informer = mongoose.model("Register", registerSchema);

router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("memberdashboard", { informers: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});




router.post("/", async (req, res) => {
  const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await Register.find();
    res.render("memberdashboard", { users: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});


module.exports = router;
