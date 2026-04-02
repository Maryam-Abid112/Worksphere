// backend/models/Proposal.js
const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer", required: true },
  coverLetter: { type: String, required: true },
  proposedRate: { type: Number },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Proposal", proposalSchema);