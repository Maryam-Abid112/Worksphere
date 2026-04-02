// backend/models/Client.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  company: { type: String },
  website: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);