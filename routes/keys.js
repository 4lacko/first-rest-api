const express = require("express");

const keysController = require("../controllers/keys");

const router = express.Router();

// GET /keys
router.get("/keys", keysController.getKeys);

// POST /keys
router.post("/key", keysController.addKey);

module.exports = router;
