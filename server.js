const express = require("express");
const app = express();

// Yelp Fusion Business API
const yelp = require("yelp-fusion");
const apiKey = "YUpzLMMKVaEyh8cYeexDMHxw0DZQGuz8WFJ5xJn2Yq1r8EQocdEV5aC2jH5nQtTHxu0t5RxCCpT5Rq9hOj1JJQ_rWr8r2MquozL5MoCOBRwja53eO5JQkg7OxykDYHYx";


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