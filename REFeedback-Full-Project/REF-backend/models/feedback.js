const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  receiverId: { type: String, required: true },
  providerId: { type: String, required: true },
  feedback: { type: String, required: false }
});

module.exports = mongoose.model("feedback", feedbackSchema);