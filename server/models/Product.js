import { mongoose } from "mongoose";

const ProductSchema = new mongoose.Schema({
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

const Product = mongoose.model("Product", ProductSchema);
export default Product;
