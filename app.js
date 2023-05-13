const express = require("express");
const bodyParser = require("body-parser");

const keysRoutes = require("./routes/keys");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(keysRoutes); // use("/keys", keysRoutes)

app.listen(8080);
