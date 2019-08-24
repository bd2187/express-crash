const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.end("<h1>hello world!!!</h1>");
});

app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
});
