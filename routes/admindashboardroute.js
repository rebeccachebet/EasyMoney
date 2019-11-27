const express = require("express");
const router = express.Router();
const Register = require("../models/adminmodel");

const mongoose = require("mongoose");

//returns a specific page
router.get("/search", async (req, res) => {
  if (req.session.user){
//console.log(req.session.user)
// try{
  //let allow for variable reassignment
  let items=await Register.find()

  console.log('working')
  // if (req.query.city){
  //   items = await Register.find({city:req.query.city})
  // }
  res.render('admindashboard',{users:items,currentUser:req.session.user})
}
else {
  res.redirect('/adminlogin')
}

// catch(err){
//   res.status(500).send('unable to search in the database')
// }
  // }
});

module.exports = router;
