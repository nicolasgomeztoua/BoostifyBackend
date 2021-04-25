const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  titles: { type: [String], required: true },
  prices: { type: [Number], required: true },
  selectedLegend: [String],
  selectedPopBadges: [String],
  selectedExtraBadges: [String],
  firstValue: [Number],
  secondValue: [Number],
  PSNemail: String,
  PSNPass: String,
  region: String,
  dateCreated: { type: Date },
  extrasArr: [[]],
  id: String,
  region: String,
  platform: String,
  badgesExtras: [String],
});
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
