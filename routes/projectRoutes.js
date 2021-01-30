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

// Update an existing project
router.put("/projects/:id", (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.end();
        })
})

// Delete a project
router.delete("/projects/:id", (req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => {
            res.end();
        })
});


module.exports = router;