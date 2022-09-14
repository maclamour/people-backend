const express = require('express');
const router = express.Router();

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', async (req, res) => {
    const context = {message: "Pet index route"};
    res.status(200).json(context);
})

router.post('/', async (req, res) => {
    res.status(201).json({message: "Created more pets!"});
})

module.exports = router;