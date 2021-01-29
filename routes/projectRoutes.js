const router = require("express").Router();
const Project = require("../models/project");

// Get all projects
router.get("/projects", (req, res) => {
    Project.find({})
        .then(projects => {
            res.json(projects);
        })
})

// Create a new project
router.post("/projects", (req, res) => {
    Project.create(req.body)
        .then(() => {
            res.end();
        })
});


module.exports = router;