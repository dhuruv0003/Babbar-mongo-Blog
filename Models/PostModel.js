const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  likes:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like"
  }
});

module.exports = mongoose.model("Post", PostSchema);
