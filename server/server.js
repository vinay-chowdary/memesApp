//  imports

const express = require("express");
const mongoose = require("mongoose"); //  ORM for mongoDB
const cors = require("cors"); //  for cross origin resource sharing
const logger = require("./logs/logger");
const page404 = require("./page404");

require("dotenv").config();
const path = require("path");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json')

//  routes

const memesRoute = require("./routes/memes");

//  middleware

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//  database connection running at 27017 on localhost
//  logs at ./logs

// mongoose.connect('mongodb://localhost:27017/memesDB',
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@memes-cluster.hrz2j.mongodb.net/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => logger.log("info", "database connection established"))
  .catch((err) =>
    logger.log("info", `database connection failed ${err.message}`)
  );

app.get("/", (req, res) => {
  res.redirect("https://memes-gallery.netlify.app/");
});

app.use("/memes", memesRoute);

//  404 error
app.all("/*", page404);

//  listening on port 8081 by default

const port = process.env.PORT || 8081;
app.listen(port, () => {
  logger.log("info", `server listening on ${port}`);
});
