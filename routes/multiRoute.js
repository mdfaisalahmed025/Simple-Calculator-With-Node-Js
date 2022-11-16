const express = require("express");
const router = express.Router();

const { MultiplyTwoNumber } = require("../controllers/multiplyControler");

router.route("/").post(MultiplyTwoNumber);

module.exports = router;
