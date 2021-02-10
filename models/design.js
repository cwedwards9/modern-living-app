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
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Design", DesignSchema);