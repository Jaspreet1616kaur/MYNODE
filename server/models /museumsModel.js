import mongoose from "mongoose";
const { Schema } = mongoose;
const museumsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
  },
  avatarPicture: {
    type: String,
    required: false,
  },
  city: { type: Schema.Types.ObjectId, ref: "city" },
});

const museumsModel = mongoose.model("museum", museumsSchema);
export default museumsModel;
