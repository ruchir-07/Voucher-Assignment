const dbConnect = require("../db/connect.js");
const Coupon = require("../model/coupon.js");

const deleteCoupon = async (req, res) => {
  dbConnect();
  if(Object.keys(req.query).length == 0) //If no query is provided
    res.status(200).send("No query provided");
  else{
    await Coupon.deleteOne(req.query);
    res.status(200).send("Query deleted successfully");
  }
  res.status(200).json({msg: "Hello from delete coupons"});
}

module.exports = deleteCoupon;
