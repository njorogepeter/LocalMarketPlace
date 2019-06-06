const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduceSchema = new Schema({
  item: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Produce = mongoose.model("Produce", ProduceSchema);

module.exports = Produce;