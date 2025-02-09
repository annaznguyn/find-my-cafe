const express = require("express");
const router = express.Router();
const homeController = require("../controller/HomeController");

// parse JSON data
router.use(express.json());

router.post("/", homeController.handleAddresses);

module.exports = router;