const express = require("express");

const predictController = require("../controllers/predictController.js");

const router = express.Router();

router.get("/gas", predictController.histories);

module.exports = router;
