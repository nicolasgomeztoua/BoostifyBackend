const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
  main: String,
  dateCreated: String,
});
const Reviews = mongoose.model("Review", ReviewsSchema);

module.exports = Reviews;
