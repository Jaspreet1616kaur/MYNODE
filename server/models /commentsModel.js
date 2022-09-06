import mongoose from "mongoose";

const { Schema } = mongoose;

const commentsSchema = new Schema(
  {
    userName: { type: String, require: true, trim: true },
    museumId: { type: String, require: true, trim: true },
    avatarPicture: { type: String, require: false },
    commentText: { type: String, require: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const CommentsModel = mongoose.model("comments", commentsSchema);

export default CommentsModel;
