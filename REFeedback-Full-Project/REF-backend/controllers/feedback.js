const FeedbackInvitation = require("../models/feedback");

exports.inviteToGiveFeedback = (request, response) => {
    const feedbackInvitation = new FeedbackInvitation({
        receiverId: request.body.receiverId,
        providerId: request.body.providerId,
        feedback: ""
    });
    feedbackInvitation.save()
        .then(result => {
            response.status(201).json({
                message: "Feeback invitation sent!",
                result: result
            });
        })
        .catch(error => {
            response.status(500).json({
              message: "Something went wrong. please try again!"
            });
        });
}

exports.getFeedbackReceiver = (request, response) => {
    FeedbackInvitation.find({receiverId: request.params.id})
      .then(result => {
        if(result) {
          response.status(200).json(result);
        } else {
          response.status(404).json({ message: "No information available!" });
        }
      })
      .catch(erroror => {
        res.status(500).json({
          message: "Fetching information failed!"
        });
      });
}

exports.getFeedbackProvider = (request, response) => {
    FeedbackInvitation.find({providerId: request.params.id})
      .then(result => {
        if(result) {
          response.status(200).json(result);
        } else {
          response.status(404).json({ message: "No information available!" });
        }
      })
      .catch(erroror => {
        res.status(500).json({
          message: "Fetching information failed!"
        });
      });
}

exports.employeeFeedbackReceiver = (request, response) => {
  const feedbackInvitation = new FeedbackInvitation({
    _id: request.body.id,
    feedback: request.body.feedback,
  });
  FeedbackInvitation.findOneAndUpdate({ _id: request.params.id }, feedbackInvitation)
    .then(result => {
      if (result.n > 0) {
        response.status(200).json({
          message: "Feedback successful!"
        });
      } else {
        response.status(401).json({
          message: "Feedback unsuccessful!"
        });
      }
    })
    .catch(error => {
      response.status(500).json({
        message: "Something went wrong!"
      });
    });
};