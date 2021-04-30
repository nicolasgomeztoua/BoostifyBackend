const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const Order = require("../models/Order");
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;
    const orders = await Order.find({ userId: user.user_id });
    res.status(200).json({
      sucess: true,
      data: "You got acess to the private data in this route",
      username: user.username,
      user_id: user.user_id,
      orders: orders,
    });
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }
};
