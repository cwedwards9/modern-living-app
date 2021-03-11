const router = require("express").Router();
const db = require("../models");
require('dotenv').config();

// Yelp Fusion Business API
const yelp = require("yelp-fusion");
const apiKey = process.env.API_KEY;

// POST route for getting Yelp API data
router.get("/yelp", (req, res, next) => {
    const searchRequest = {...req.query, limit: 10};
      
    const client = yelp.client(apiKey);
    
    client.search(searchRequest).then(response => {
      res.json(response);
    })
    .catch(next);
});


// Find the current user and all of the contractors they saved in their favorites
router.get("/contractors", (req, res, next) => {
  db.User.findById(req.user._id)
    .populate("contractors")
    .then(foundUser => {
      res.json(foundUser.contractors);
    })
    .catch(next);
});

// Find the current user and Add/Save a new contractor to their favorites
router.post("/contractors", (req, res, next) => {
  db.User.findById(req.user._id)
    .then(foundUser => {
      db.Contractor.create({...req.body, userid: req.user._id})
      .then((newContractor) => {
        newContractor.save();
        foundUser.contractors.push(newContractor._id);
        foundUser.save();
        res.end();
      })
      .catch(next)
    })
    .catch(next);
});

// Delete a contractor from favorites
router.delete("/contractors/:id", (req, res, next) => {
  db.Contractor.findByIdAndDelete(req.params.id)
  .then(() => {
    db.User.updateOne({_id: req.user._id}, { $pull: { contractors: req.params.id }})
    .then(() => {
      res.end();
    })
    .catch(next)
  })
  .catch(next);
});


module.exports = router;