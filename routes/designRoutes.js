const router = require("express").Router();
const db = require("../models");
// Unsplash images API
const { createApi } = require("unsplash-js");
const nodeFetch = require("node-fetch");

// Use environment varaible for unsplash access key
const accessKey = process.env.ACCESS_KEY;
const unsplash = createApi({ accessKey: accessKey, fetch: nodeFetch });


// GET route for getting Unsplash API data
router.get("/unsplash", (req, res) => {
    unsplash.search.getPhotos({...req.query, perPage: 12, orientation: "landscape"})
    .then(result => {
        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
            res.json("failed");
        } else {
            // handle success here
            res.json(result.response);
        }
    });
});



// Show all designs the user saved in favorites
router.get("/designs", (req, res) => {
    db.User.findById(req.user._id)
    .populate("designs")
    .then(foundUser => {
        res.json(foundUser.designs);
    })
});
  


// Add/Save a new designs to the favorites
router.post("/designs", (req, res) => {
    db.User.findById(req.user._id)
    .then((foundUser) => {
        db.Design.create({...req.body, userid: req.user._id})
        .then(newDesign => {
            newDesign.save();
            foundUser.designs.push(newDesign._id);
            foundUser.save();
            res.end();
        })
    })
});
  


  // Delete a designs from favorites
router.delete("/designs/:id", (req, res) => {
    db.Design.findByIdAndDelete(req.params.id)
    .then(() => {
        db.User.updateOne({_id: req.user._id}, { $pull: { designs: req.params.id }})
        .then(() => {
            res.end();
        })
    })
});

module.exports = router;