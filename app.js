const express = require("express");
const app = express();
const path = require("path");
const members = require("./assets/members");

const PORT = process.env.PORT || 5000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// get all members
app.get("/api/members", (req, res) => {
    res.json(members);
});

app.listen(PORT, () => {
    console.log(`Now listening to port: ${PORT}`);
});
