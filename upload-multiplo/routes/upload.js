const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload");

router.get("/", uploadController.index);
router.post("/upload", uploadController.upload);
router.get("/success", uploadController.success);
router.get("/error", uploadController.error);

module.exports = router;
