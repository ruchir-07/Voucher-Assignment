const dbConnect = require("../db/connect.js");
const Product = require("../model/product.js");

const readProduct = async (req, res) => {
  dbConnect();
  const searchResult= await Product.find(req.query);
  res.status(200).json(searchResult);
}

module.exports = readProduct;
