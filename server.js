const express = require("express");
const app = express();

// Yelp Fusion Business API
require('dotenv').config()
const yelp = require("yelp-fusion");
const apiKey = process.env.API_KEY;


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
// }


app.post("/yelp", (req, res) => {
    const searchRequest = {...req.body, limit: 5};
      
      const client = yelp.client(apiKey);
      
      client.search(searchRequest).then(response => {
          res.json(response);
      }).catch(e => {
        console.log(e);
      });
})


app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));