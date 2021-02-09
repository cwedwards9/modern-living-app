const mongoose = require("mongoose");

// Create User schema
const UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        trim: true
    },
    f_name: {
        type: String,
        trim: true,
    },
    l_name: {
        type: String,
        trim: true,
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    contractors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contractor"
        }
    ],
    designs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Design"
        }
    ]
});


module.exports = mongoose.model("User", UserSchema);