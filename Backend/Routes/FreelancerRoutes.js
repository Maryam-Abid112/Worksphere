const express = require("express");
const router = express.Router();
const{
    upsertFreelancerProfile,
    getFreelancerProfile,
    getAllFreelancers,
    getFreelancerBySkill
} = require("../Controller/freelancerController");

const {protect} = require("..//middleware/middleauth");

router.post("/", protect, upsertFreelancerProfile);
router.get("/", getAllFreelancers);
router.get("/me", protect, getFreelancerProfile);
router.get("/skill/:skill", getFreelancerBySkill);

module.exports = router;