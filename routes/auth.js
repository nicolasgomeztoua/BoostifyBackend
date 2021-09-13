const express = require("express");

const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  createorder,
  supportTickets,
  reviews,
  missingOrder,
  getReviews,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/createorder").post(createorder);

router.route("/supportTickets").post(supportTickets);

router.route("/reviews").post(reviews);

router.route("/missing-order").post(missingOrder);

router.route("/getReviews").get(getReviews);


module.exports = router;
