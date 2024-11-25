const express = require("express");
const router = express.Router();
const { registerUser } = require("../../controllers/auth/auth-controller");
router.post("/register", registerUser);
module.exports = router;
