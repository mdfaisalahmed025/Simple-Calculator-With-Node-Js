const express = require("express");
const router = express.Router();

const { SubtractTwoNumber } = require("../controllers/subtructControler");

router.route("/").post(SubtractTwoNumber);

module.exports = router;
