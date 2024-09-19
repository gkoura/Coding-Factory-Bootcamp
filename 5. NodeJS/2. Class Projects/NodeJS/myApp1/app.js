const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("main page")
    res.send("Hello darkness!")}
);

app.get("/about", (req, res) => {
    console.log("about request");
    res.send("about page");
});

app.get("/login", (req, res) => {
    console.log("login request");
    res.send("login with ur account");
});

app.get('/user', (req, res) => {
    let query = req.query;
    console.log(query)

    let name = query.name
    let surname = query.surname
    let age = query.age

    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)
})

app.get('/details/:name/:surname/:age', (req, res) => {
    let params = req.params
    console.log(params)

    let name = params.name
    let surname = params.surname
    let age = params.age

    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
