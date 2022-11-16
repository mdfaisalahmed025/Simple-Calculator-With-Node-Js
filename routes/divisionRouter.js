const express = require("express");
const router = express.Router();

const { DivisionTwoNumber } = require("../controllers/divisioncontroler");

router.route('/').post(DivisionTwoNumber);

module.exports = router;
