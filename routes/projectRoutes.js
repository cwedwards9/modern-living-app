const router = require("express").Router();
const db = require("../models");
const { body, validationResult } = require('express-validator');

// Get all projects
router.get("/projects", (req, res, next) => {
    db.User.findById(req.user._id)
    .populate("projects")
    .then(foundUser => {
        res.json(foundUser.projects);
    })
    .catch(next)
});

// Create a new project
router.post("/projects",
    // using express-validator
    body("estimated_cost").isNumeric().withMessage('Cost must be numeric.'),
    body("budget").isNumeric().withMessage('Budget must be numeric.'),
    (req, res, next) => {
        validationCheck(req, res);
    
    db.User.findById(req.user._id)
    .then(foundUser => {
        db.Project.create({...req.body, userid: req.user._id})
        .then(newProject => {
            newProject.save();
            foundUser.projects.push(newProject._id);
            foundUser.save();
            res.end();
        })
        .catch(next)
    })
    .catch(next)
});

// Update an existing project
router.put("/projects/:id", 
    // using express-validator
    body("estimated_cost").isNumeric().withMessage('Cost must be numeric.'),
    body("budget").isNumeric().withMessage('Budget must be numeric.'),
    (req, res, next) => {
        validationCheck(req, res);

    db.Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.end();
    })
    .catch(next);
});

// Delete a project
router.delete("/projects/:id", (req, res, next) => {
    db.Project.findByIdAndDelete(req.params.id)
    .then(() => {
        db.User.updateOne({_id: req.user._id}, { $pull: { projects: req.params.id }})
        .then(() => {
            res.end();
        })
        .catch(next)
    })
    .catch(next);
});



function validationCheck(req, res) { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ type: "express-validator", message: errors.array() });
    else return;
}


module.exports = router;