const express = require("express");

const keysRoutes = require("./routes/keys");

const app = express();

app.use(keysRoutes); // use("/keys", keysRoutes)

app.listen(8080);
