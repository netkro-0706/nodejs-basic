"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.get("/", function (req, res) {
    res.send(`
    <a href='http://localhost:3000/sound/dog'>dog</a>
    <a href='http://localhost:3000/sound/cat'>cat</a>
    hello world`);
});
app.get("/sound/:name", function (req, res) {
    const { name } = req.params;
    if (name === "dog") {
        res.json({ sound: "bowwow" });
    }
    else if (name === "cat") {
        res.json({ sound: "nyaw" });
    }
    else if (name === "pig") {
        res.json({ sound: "buibui" });
    }
    else {
        res.json({ sound: "unkown" });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`run to http://localhost:${port}/`);
});
