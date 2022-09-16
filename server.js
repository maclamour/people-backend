///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Init .env vars
require("dotenv").config();
require('./config/db.connection')
// pull PORT from .env, give default value of 4000 and establish DB Connection


// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI
const { PORT = 4000 } = process.env;
// My controllers 
const petController = require('./controllers/pet-controller')



const express = require("express");
// Cors and morgan
const cors = require("cors");
const morgan = require("morgan");


const app = express();

///////////////////////////////
// MiddleWare
////////////////////////////////

app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development  

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
