const mongoose = require("mongoose");

const CommentSchemma = new mongoose.Schema({
  // Konsi post par comment kar rahe ho

  post: {
    // comment will refer to the object id of post model. here post object represents id of post model
    type: mongoose.Schema.Types.ObjectId,

    // ek model ko dusre model se refrence karne ke liye ref ka use hota h.
    // Here comment model is refrencing to post model

    ref: "Post", //This is refercee to post
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
// Here we have exported the model by the name of Comment

module.exports = mongoose.model("Comment", CommentSchemma);
