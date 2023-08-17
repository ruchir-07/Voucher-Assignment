const express = require("express");
const cors = require("cors");
const fs = require("fs");

const connectDB = require("./db/connect.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

//Setting up routes
const files = fs.readdirSync("./routes/");
for (const file of files)
{
  const filename = file.substring(0,file.length-3);
  app.use(`/api/${filename}`, require(`./routes/${filename}`));
}

//Default route
app.get("/", (req, res)=>{
  res.status(200).send("Endpoints: /api/createCoupon, /api/readCoupon, /api/updateCoupon, /api/deleteCoupon");
});

//Start the server
try{
  connectDB();
  app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
  });
}
catch(error){
  console.log(error);

}
