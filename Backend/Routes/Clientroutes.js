const express = require("express");
const router = express.Router();
const { upsertClientProfile, getClientProfile } = require("../Controller/clientController");
const { protect } = require("../middleware/middleauth");

router.get("/profile", protect, getClientProfile);
router.put("/profile", protect, upsertClientProfile);

module.exports = router;