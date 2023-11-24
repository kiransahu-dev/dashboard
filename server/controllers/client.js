import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productWithStat = await Promise.all(
      products.map(async (prdct) => {
        const stats = await ProductStat.find({
          productId: prdct._id,
        });
        return {
          ...prdct._doc,
          stats,
        };
      })
    );
    res.status(200).json(productWithStat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
