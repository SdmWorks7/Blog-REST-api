const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "Rahul",
        content: "Yo what up bro"
    },
    {
        username: "Samay",
        content: "Welcome to india's got latent"
    },
    {
        username: "Tanmay",
        content: "we have prisoner op"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) =>{
    let{username, content} = req.body;
    posts.push({username, content});
    res.send("post created");
});

app.listen(8080, (req, res) => {
    console.log("server 1");
});