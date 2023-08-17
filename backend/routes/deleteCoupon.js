
const express = require("express");
const deleteCoupon = require("../controllers/deleteCoupon.js");

const routes = express.Router();

routes.route("/").get(deleteCoupon);

module.exports = routes;
