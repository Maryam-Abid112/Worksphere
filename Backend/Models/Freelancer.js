// backend/models/Freelancer.js
const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  skills: [{ type: String }],
  bio: { type: String },
  portfolio: [{ title: String, link: String }],
  hourlyRate: { type: Number },
  availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Freelancer", freelancerSchema);