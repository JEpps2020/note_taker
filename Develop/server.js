const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;
// const tableArray = [
//     {
//         name: "lada",
//         email: "lada@gmail.com",
//         phone: "123-456-7890",
//         id: "First date"
//     }
// ];

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


// app.get("/make", function(req, res) {
//     res.sendFile(path.join(__dirname, "make.html"));
//   });

app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(db);
    //res.sendFile(path.join(__dirname, "view.html"));
  });

app.get("/api/notes", function(req, res){
    //res.send("works");
    res.json(db);
});

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+'/public/', "index.html"));
  });

  app.listen(port, function(){
    console.log(`App server is listening on port: ${port}`);
});