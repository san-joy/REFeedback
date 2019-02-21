const express = require("express");
const FeedbackController = require("../controllers/feedback");
const router = express.Router();

router.post("/inviteToGiveFeedback", FeedbackController.inviteToGiveFeedback);

router.get("/feedbackReceiver/:id", FeedbackController.getFeedbackReceiver);

router.get("/feedbackProvider/:id", FeedbackController.getFeedbackProvider);

router.put("/feedbackReceive/:id", FeedbackController.employeeFeedbackReceiver);

module.exports = router;