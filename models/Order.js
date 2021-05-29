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
  orderId: String,
  region: String,
  platform: String,
  badgesExtras: [String],
  rankedImg: [String],
  userId: { type: String, default: "no Id" },
  progress: { type: Number, default: 0 },
  kills: { type: Number, default: "NO KILLS BOOST" },
});
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
