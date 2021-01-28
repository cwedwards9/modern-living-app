const mongoose = require("mongoose");

// Create Contractor schema
const ContractorSchema = new mongoose.Schema ({
    name: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
    },
    locationOne: {
        type: String,
        trim: true,
    },
    locationTwo: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
    },
    url: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Contractor", ContractorSchema);