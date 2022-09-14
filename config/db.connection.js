///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose ✅✅✅"))
  .on("close", () => console.log("Your are disconnected from mongoose 🔌⚡️🔌"))
  .on("error", (error) => console.log(error));