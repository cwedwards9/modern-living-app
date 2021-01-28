const router = require("express").Router();
const User = require("../models/user");

router.post("/register", (req, res) => {
    User.create(req.body)
      .then(() => {
        res.redirect("/");
      })
});


module.exports = router;