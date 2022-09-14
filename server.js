///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const cors = require("cors")
const morgan = require("morgan")

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
// could use eirther port const 
const { PORT, MONGODB_URI } = process.env;
// const PORT= process.env.PORT

// import express
const express = require("express");

// create application object
const app = express();

// import people router
const petController = require('./controllers/pet-controller')

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development
// all requests for endpoints that begin with '/people'
app.use('/pet', petController)



///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("Welcome To Our Pets 🤪");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT} ✅✅✅`));
