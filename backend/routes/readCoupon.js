const express = require("express");
const readCoupon = require("../controllers/readCoupon.js");

const routes = express.Router();

routes.route("/").get(readCoupon);

module.exports = routes;
