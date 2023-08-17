const mongoose = require("mongoose");

const dbConnect = ()=>{
  return mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = dbConnect;
