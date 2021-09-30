const { Schema, model } = require("mongoose");

const operationSchema = new Schema({
  concept: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = model("Operation", operationSchema);
