// backend/models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [{ type: String }],
  budget: { type: Number },
  deadline: { type: Date },
  status: { type: String, enum: ["open", "in-progress", "completed"], default: "open" },
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);