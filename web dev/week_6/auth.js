const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "akashKaSecret";

const app = express();
const user = [];

app.use(express.json());

app.post("/signUp", function(req, res) { // Corrected the parameter order
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up lad"
    });
});

app.post("/signIn", function(req, res) { // Corrected the parameter order
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].password === password) {
            foundUser = user[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Credentials invalid"
        });
        return;
    } else {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
