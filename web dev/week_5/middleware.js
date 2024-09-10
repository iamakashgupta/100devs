const express = require("express");

const app = express();

let reqCount = 0;

function middleware(req, res, next) {
    console.log(`The method is ${req.method}`);
    console.log(`The URL is ${req.url}`);
    
    next();  // Proceed to the next middleware function
}

function requestIncreaser(req, res, next) {
    reqCount += 1;
    console.log("Request count increased to " + reqCount);
    next();
}

function multiply(req, res, next) {
    const a = parseFloat(req.query.a);  // Parse the query parameters as numbers
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    res.json({
        ans: a * b
    });
}

app.use(middleware);

app.get("/multiply", requestIncreaser, multiply);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
