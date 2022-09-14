const express = require('express');
const router = express.Router();
const {Pet} = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all people
    res.json(await Pet.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) => {
    try {
      // create new person
      res.json(await Pet.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = router;