const express = require("express");
const app = express();
const contractorRoutes = require("./routes/contractorRoutes");
const designRoutes = require("./routes/designRoutes");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");


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

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
// }


app.use(contractorRoutes);
app.use(designRoutes);
app.use(projectRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));