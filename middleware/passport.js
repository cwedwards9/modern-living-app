const User = require("../models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

// Use Local Strategy for email and password authentication
module.exports = function (passport) {
    passport.use(new localStrategy(
        // Our user will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        function(email, password, done) {
            // Look for the user with the inputted email
            User.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);

                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );


    // User (de)serialize methods to keep authentication state across requests

    // Tell passport how to serialize the user, or how to store a user in the session
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    // Tell passport how to get a user out of the session
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (error, user) => {
            cb(error, user);
        });
    });
}