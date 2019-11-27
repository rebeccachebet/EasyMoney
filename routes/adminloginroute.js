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
    res.render("adminlogin", { informers: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});




 router.post("/", async (req, res) => {
   try {
     const user = await Register.authenticate(
       req.body.username,
       req.body.password
     );
     // res.send("hey " + user.firstname + " " + user.lastname)
     req.session.user = user;
     res.redirect("/admindashboard/search"); //not good to use
   } catch {
     // res.send("Login Failed")

     // res.redirect('register')
     res.render("adminlogin", { error: "Failed to login, Please try again" });
   }
 });
 



router.get("/search", async (req, res) => {
  if (req.session.user) {
    //console.log(req.session.user)
    // try{
    //let allow for variable reassignment
    let items = await Register.find();

    console.log("working");
    // if (req.query.city){
    //   items = await Register.find({city:req.query.city})
    // }
    res.render("admindashboard", {
      users: items,
      currentUser: req.session.user
    });
  } else {
    res.redirect("/adminlogin");
  }

  // catch(err){
  //   res.status(500).send('unable to search in the database')
  // }
  // }
});

 

module.exports = router;
