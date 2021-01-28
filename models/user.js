const mongoose = require("mongoose");

// Create User schema
const UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    f_name: {
        type: String,
        trim: true,
    },
    l_name: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model("User", UserSchema);