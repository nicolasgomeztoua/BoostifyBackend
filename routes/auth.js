const express = require("express");

const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  supportTickets,
  reviews,
  missingOrder,
  getReviews,
  createorder
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/supportTickets").post(supportTickets);

router.route("/reviews").post(reviews);

router.route("/missing-order").post(missingOrder);

router.route("/get-reviews").get(getReviews);

router.route("/createorder").post(createorder);

module.exports = router;
