import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
