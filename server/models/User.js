import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({
  intensity: Number,
  relevance: Number,
  year: Number,
  country: String,
  region: String,
  topic: String,
  pestle: String,
  city: String,
  sector: String,
  likelihood: Number,
});

const User = mongoose.model("User", UserSchema);
export default User;
