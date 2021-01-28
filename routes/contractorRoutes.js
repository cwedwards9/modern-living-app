const router = require("express").Router();
const Contractor = require("../models/contractor");

// Yelp Fusion Business API
const yelp = require("yelp-fusion");

require('dotenv').config();
const apiKey = process.env.API_KEY;

// POST route for getting Yelp API data
router.post("/yelp", (req, res) => {
    const searchRequest = {...req.body, limit: 5};
      
    const client = yelp.client(apiKey);
    
    client.search(searchRequest).then(response => {
      res.json(response);
    })
    .catch(e => {
      console.log(e);
    });
});


// Show all contractors the user saved in favorites
router.get("/contractors", (req, res) => {
  Contractor.find({})
    .then(contractors => {
      res.json(contractors);
    })
});

// Add/Save a new contractor to the favorites
router.post("/contractors", (req, res) => {
  Contractor.create(req.body)
    .then(() => {
      res.end();
    })
});

// Delete a contractor from favorites
router.delete("/contractors/:id", (req, res) => {
  Contractor.findByIdAndDelete(req.params.id)
    .then(() => {
      res.end();
    })
});


module.exports = router;