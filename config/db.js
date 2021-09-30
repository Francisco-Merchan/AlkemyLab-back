const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/alkemyDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDB;
