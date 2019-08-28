const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = function(req, res, next) {
    console.log(new Date());
    next();
};

app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members api routes
const members_routes = require("./routes/api/members");
app.use("/api/members", members_routes);

app.listen(PORT, () => {
    console.log(`Now listening to port: ${PORT}`);
});
