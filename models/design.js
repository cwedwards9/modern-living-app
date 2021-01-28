const mongoose = require("mongoose");

// Create Design schema
const DesignSchema = new mongoose.Schema ({
    caption: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model("Design", DesignSchema);