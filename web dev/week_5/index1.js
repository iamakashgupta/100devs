const express = require("express");

const app = express();

let reqCount = 0;

function requestIncreaser(req, res, next){
    reqCount = reqCount + 1;
    console.log("request count is increases to " + reqCount)
    next();
}

function multiply(req, res ,next){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

}

app.get("/multiply",requestIncreaser, multiply)

app.listen(3000);