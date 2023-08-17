require("dotenv").config();
const dbConnect = require("../db/connect.js");
const Coupon = require("../model/coupon.js");

const createCoupon = async (req, res) => {
  if (Object.keys(req.query).length == 0) //If there are no request queries
    res.status(200).send("No query provided")
  else {
    dbConnect();
    await Coupon.create(req.query)
    res.status(200).send("Updated database!");

  }
}

module.exports = createCoupon;
