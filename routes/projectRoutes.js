const router = require("express").Router();
const db = require("../models");

// Get all projects
router.get("/projects", (req, res) => {
    db.User.findById(req.user._id)
    .populate("projects")
    .then(foundUser => {
        res.json(foundUser.projects);
    })
})

// Create a new project
router.post("/projects", (req, res) => {
    db.User.findById(req.user._id)
    .then(foundUser => {
        db.Project.create({...req.body, userid: req.user._id})
        .then(newProject => {
            newProject.save();
            foundUser.projects.push(newProject._id);
            foundUser.save();
            res.end();
        })
    });
});

// Update an existing project
router.put("/projects/:id", (req, res) => {
    db.Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.end();
    })
})

// Delete a project
router.delete("/projects/:id", (req, res) => {
    db.Project.findByIdAndDelete(req.params.id)
    .then(() => {
        db.User.updateOne({_id: req.user._id}, { $pull: { projects: req.params.id }})
        .then(() => {
            res.end();
        })
    })
});


module.exports = router;