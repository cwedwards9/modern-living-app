const router = require("express").Router();

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


module.exports = router;