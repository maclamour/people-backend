///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Init .env vars
require("dotenv").config();

const { PORT, MONGODB_URI } = process.env;
// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

const express = require("express");
const app = express();

// Add in mongoose
const mongoose = require('mongoose');

// My controllers 
const petController = require('./controllers/pet-controller')

// Cors and morgan
const cors = require("cors");
const morgan = require("morgan");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

mongoose.connect(MONGODB_URI);

// Connection Events

///////////////////////////////
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose ✅✅✅"))
  .on("close", () => console.log("Your are disconnected from mongoose 🔌⚡️🔌"))
  .on("error", (error) => console.log(error));

app.use('/pet', petController);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route



app.get("/", (req, res) => {
    res.send("Welcome to our Pets 🤪");
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT} ✅✅✅`));
