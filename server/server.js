//  imports

const express = require('express');
const mongoose = require('mongoose');                    //  ORM for mongoDB
var cors = require('cors');                              //  for cross origin resource sharing



//  middleware

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//  database connection running at 27017 on localhost

mongoose.connect('mongodb://localhost:27107/memesDB',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connection successful"))
    .catch((err) => console.log(err.message));      //TODO: add log file instead of console log



//  listening on port 8081 by default

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});