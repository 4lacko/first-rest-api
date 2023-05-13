const express = require("express");

const keysController = require("../controllers/keys");

const router = express.Router();

// GET /keys
router.get("/keys", keysController.getKeys);

module.exports = router;
