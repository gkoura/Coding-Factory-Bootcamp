const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/create", (req, res) => {
	res.render("form", {});
});

app.post("/user", function (req, res) {
	let firstname = req.body.firstname;
	let surname = req.body.surname;
	let email = req.body.email;
	let sex = req.body.sex;

    res.render("user", {
        name: firstname,
        surname: surname,
        email: email, 
        sex: sex
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));