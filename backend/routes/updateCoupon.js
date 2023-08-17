
const express = require("express");
const updateCoupon = require("../controllers/updateCoupon.js");

const routes = express.Router();

routes.route("/").get(updateCoupon);

module.exports = routes;
