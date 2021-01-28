const mongoose = require("mongoose");

// Create Project schema
const ProjectSchema = new mongoose.Schema ({
    title: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true
    },
    estimated_cost: {
        type: Number,
        trim: true
    },
    budget: {
        type: Number,
        trim: true
    }
});

module.exports = mongoose.model("Project", ProjectSchema);
            