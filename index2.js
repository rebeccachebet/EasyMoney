const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
//app.use(bodyParser.urlencoded({ extended: true }));

// const loginRoutes=require("./routes/loginroutes")
// app.use("/login",loginRoutes)


app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login",(req,res)=>{
    res.send("Easy Money Login Page")
})

app.listen(5000, function () {
    console.log('listening on 5000')
})

