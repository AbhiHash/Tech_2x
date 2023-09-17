import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export const User =
  mongoose.models.Admin || mongoose.model("Admin", userSchema);
