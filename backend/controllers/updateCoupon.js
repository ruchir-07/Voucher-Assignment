const dbConnect = require("../db/connect.js");
const Coupon = require("../model/coupon.js");

const updateCoupon = async (req, res) => {
  dbConnect();
  if(Object.keys(req.query).length == 0) //If no query is provided
    res.status(200).send("No query provided");
  else{
    res.status(200).send("Query Updated successfully");
  }
}

module.exports = updateCoupon;
