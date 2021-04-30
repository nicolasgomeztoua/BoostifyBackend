const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/private").get(protect);

module.exports = router;
