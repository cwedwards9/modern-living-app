const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
// }

app.get("/message", (req, res) => {
    res.json({name: "Chase", message: "Hello!"});
});


app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));