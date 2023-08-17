const dbConnect = require("../db/connect.js");
const Coupon = require("../model/coupon.js");

const readCoupon = async (req, res) => {
  dbConnect();
  const searchResult= await Coupon.find(req.query);
  res.status(200).json(searchResult);
}

module.exports = readCoupon;
