const express = require("express");
const bodyParser = require("body-parser");

const keysRoutes = require("./routes/keys");

const app = express();

app.use(bodyParser.json());

app.use(keysRoutes); // use("/keys", keysRoutes)

app.listen(8080);
