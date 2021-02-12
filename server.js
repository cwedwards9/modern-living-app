const express = require("express");
const app = express();
const path = require("path");
const contractorRoutes = require("./routes/contractorRoutes");
const designRoutes = require("./routes/designRoutes");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");

const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");


const URL = process.env.MONGODB_URI || "mongodb://localhost/homeDB";

// Connect to MongoDB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log("Connected to MongoDB!"))
.catch(error => console.log(error.message));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Initialize Passport and allow persistent login session
// app.use(cors({ origin: "https://localhost:3000", credentials: true }));
app.use(cors());
app.use(session({ secret: "secretcode", resave: true, saveUninitialized: true }));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./middleware/passport")(passport);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use('*', express.static('client/build'));
}


app.use("/api", contractorRoutes);
app.use("/api", designRoutes);
app.use("/api", projectRoutes);
app.use("/api", userRoutes);

// Send requests to the React App
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));