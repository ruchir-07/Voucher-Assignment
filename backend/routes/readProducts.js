const express = require("express");
const readProducts = require("../controllers/readProducts.js");

const routes = express.Router();

routes.route("/").get(readProducts);

module.exports = routes;
