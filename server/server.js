//  imports

const express = require('express');
const mongoose = require('mongoose');                    //  ORM for mongoDB
const cors = require('cors');                              //  for cross origin resource sharing
const logger = require('./logs/logger')



//  middleware

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//  database connection running at 27017 on localhost

mongoose.connect('mongodb://localhost:27017/memesDB',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => (
        logger.log('info', "database connection established")
    ))
    .catch((err) => (
        logger.log('info', `database connection failed ${err.message}`
        ))
    );




//  listening on port 8081 by default

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});