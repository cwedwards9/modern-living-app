const router = require("express").Router();
const Design = require("../models/design");
// Unsplash images API
const { createApi } = require("unsplash-js");
const nodeFetch = require("node-fetch");

// Use environment varaible for unsplash access key
const accessKey = process.env.ACCESS_KEY;
const unsplash = createApi({ accessKey: accessKey, fetch: nodeFetch });


// GET route for getting Unsplash API data
router.get("/unsplash", (req, res) => {
    unsplash.search.getPhotos({...req.query, perPage: 12})
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
    Design.find({})
        .then(contractors => {
            res.json(contractors);
        })
});
  


// Add/Save a new designs to the favorites
router.post("/designs", (req, res) => {
    Design.create(req.body)
        .then(() => {
            res.end();
        })
});
  


  // Delete a designs from favorites
router.delete("/designs/:id", (req, res) => {
    Design.findByIdAndDelete(req.params.id)
        .then(() => {
            res.end();
        })
});

module.exports = router;