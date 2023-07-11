//start your server so you can use ejs
//install packages : npm init, npm i express, npm i body-parser, npm i cors, npm i nodemon.
//import the packages
//in package .json fix the nodemon inside and add a type od module
import bodyParser from "body-parser"; 
import express from "express";
const app = express();
import cors from "cors";

// setup middlewares and other configs
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("https://tvshows-4vri.onrender.com/detail");
});

app.get(`${location.origin}/detail`, (req, res) => {
  const detailid = req.query.id;//req.query.id is for also getting the id link in a running server(backend)
  fetch(`https://www.episodate.com/api/show-details?q=1934 `)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      res.render("detail", {post});
    });

});

//listen to port at 9000
app.listen(9000, () => {
  console.log("App is live on port 9000");
});
