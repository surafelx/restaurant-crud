require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/getRestaurants", (req, res) => {
    console.log("Retrieve restaurant data");
});

app.listen(port, () => {
    console.log(`Server is up and running on Port ${port}! 👍`);
});