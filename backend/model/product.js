const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: [true, "Name should be provided"]
  },
  "old_price": {
    type: String,
    required: [true, "Old price should be provided"]
  },

  "new_price": {
    type: String,
    required: [true, "New price should be provided"]
  },
});

module.exports = mongoose.model("Product", productSchema);
