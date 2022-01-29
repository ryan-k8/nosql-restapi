const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");
const upload = require("../middlewares/upload");

router.post("/register", upload.single("image"), authController.register);
router.post("/login", authController.login);
router.post("/refesh-token", authController.refreshToken);
router.post("/logout", authController.logout);

module.exports = router;
