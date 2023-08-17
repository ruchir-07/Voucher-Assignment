const express = require("express");
const createCoupon = require("../controllers/createCoupon.js");

const routes = express.Router();

routes.route("/").get(createCoupon);

module.exports = routes;
