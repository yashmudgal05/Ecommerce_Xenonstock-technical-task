const express = require("express");
const {sendMessage } = require("../controllers/contactController");

const router = express.Router();

router.route("/message").post(sendMessage);

module.exports = router;