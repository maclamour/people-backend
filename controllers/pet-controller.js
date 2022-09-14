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

  // PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // get people by ID
        res.json(await Pet.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// PEOPLE UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // update people by ID
    res.json(
      await Pet.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // delete people by ID
    res.json(await Pet.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

  

module.exports = router;