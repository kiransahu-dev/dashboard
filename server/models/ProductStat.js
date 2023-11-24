import { mongoose } from "mongoose";

const ProductStatSchema = new mongoose.Schema({
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

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
