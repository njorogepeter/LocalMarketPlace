const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produceSchema = new Schema({
  item: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const Produce = mongoose.model("Produce", produceSchema);

module.exports = Produce;