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
  platform: String,
  badgesExtras: [String],
  rankedImg: [String],
  userId: { type: String, default: "no Id" },
  progress: { type: Number, default: 0 },
  kills: { type: [String], default: ["NO KILLS BOOST"] },
  placementMatches: [Number],
  boosterDiscord: {type: String, default:"No Booster Assigned Yet"}
});
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
