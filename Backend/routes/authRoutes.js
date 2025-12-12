const { register, login } = require("../controllers/authController");
const express = require("express");

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);

module.exports = router;
