// Authentication Routes

const { Router } = require("express");
const {
  sendLogin,
  sendSignUp
} = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/log-in", sendLogin);
router.post("/auth/sign-up", sendSignUp);

module.exports = router;
