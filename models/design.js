const mongoose = require("mongoose");

// Create Design schema
const DesignSchema = new mongoose.Schema ({
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Design", DesignSchema);