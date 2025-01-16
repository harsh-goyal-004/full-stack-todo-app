const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/todo`
    );
    console.log(
      `DATABASE CONNECTED SUCCESSFULLY !! HOST :: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("DATABASE CONNECTION ERROR : ", error);
  }
};

module.exports = dbConnect;
