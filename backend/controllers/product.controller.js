import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ _id: id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
