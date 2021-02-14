//  imports

const express = require('express');
const mongoose = require('mongoose');                    //  ORM for mongoDB
const cors = require('cors');                              //  for cross origin resource sharing
const logger = require('./logs/logger')
const page404 = require('./page404')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')


//  routes

const memesRoute = require('./routes/memes')



//  middleware

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




//  database connection running at 27017 on localhost
//  logs at ./logs

mongoose.connect('mongodb://localhost:27017/memesDB',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => (
        logger.log('info', "database connection established")
    ))
    .catch((err) => (
        logger.log('info', `database connection failed ${err.message}`
        ))
    );




app.use('/memes', memesRoute);

//  404 error
app.all('*', page404);


//  listening on port 8081 by default

const port = process.env.PORT || 8081;
app.listen(port, () => {
    logger.log("info", `server listening on ${port}`);
});