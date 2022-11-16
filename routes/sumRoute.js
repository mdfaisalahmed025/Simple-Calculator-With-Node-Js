const express = require("express");
const router = express.Router();

const { addTwoNumber } = require("../controllers/addControler");

router.route('/').post(addTwoNumber);

module.exports = router;
