const router = require("express").Router();
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Creating a new user
router.post("/register", (req, res) => {
  const { email, password, f_name, l_name } = req.body;
  User.findOne({ email: email }, async (error, foundUser) => {
    if(error) return res.status(500).json( "Oh no, something went wrong" );
    if(foundUser) return res.status(409).json("User already exists");
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email: email, password: hashedPassword, f_name: f_name, l_name: l_name });
      await newUser.save();
      req.login(newUser, error => {
        if(error) return next(error);
        res.json(newUser);
      })
    }
  });
});


// Logging a user in
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if(error) return res.status(500).json("Oh no, something went wrong");
    if(!user) return res.status(409).json("Username or password is incorrect!");
    else {
      req.logIn(user, error => {
        if(error) throw error;
        res.json({ id: user._id, fName: user.f_name });
      })
    }
  })(req, res, next);
});


// Logging a user out
router.get("/logout", (req, res) => { 
  req.logout();
  res.end();
});


module.exports = router;