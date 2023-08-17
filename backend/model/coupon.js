const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  "title": {
    type: String,
    required: [true, "Amount title should be provided"]
  },
  "amount": {
    type: Number,
    required: [true, "Amount value should be provided"]
  },

  "condition": {
    type: Number,
    required: [true, "Condition should be provided"]
  },
  "code": {
    type: String,
    required: [true, "Code should be provided"]
  },
  "expiry": {
    type: Date,
    required: [true, "Expiry date should be provided"]
  },
  "criteria": {
    type: Array,
    required: [true, "Criteria should be provided"]
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
