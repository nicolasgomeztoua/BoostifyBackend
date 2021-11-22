
const User = require("../models/User");

const ErrorResponse = require("../utils/errorResponse");
const sendEmailForgot = require("../utils/sendEmailForgot");
const sendEmailRegister = require("../utils/sendEmailRegister");
const crypto = require("crypto");
const Order = require("../models/Order");
const supportTickets = require("../models/supportTickets");
const Reviews = require("../models/Reviews");
const sendEmailOrder = require("../utils/sendEmailOrder");
const { register, createOrderEmail, forgotPasswordEmail } = require("../templates/emails");

exports.register = async (req, res, next) => {
  const { username, email, password, special, dateCreated } = req.body;
  const message = register(username, email);
  try {
    const user = await User.create({
      username,
      email,
      password,
      special,
      dateCreated,
    });
    await sendEmailRegister({
      to: email,
      subject: "Thanks for signing up",
      text: message,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.createorder = async (req, res, next) => {
  const orderId = crypto.randomBytes(4).toString("hex");
  const {
    titles,
    prices,
    selectedLegend,
    selectedPopBadges,
    selectedExtraBadges,
    firstValue,
    secondValue,
    PSNemail,
    PSNPass,
    region,
    dateCreated,
    extrasArr,
    items,
    totalPrice,
    platform,
    badgesExtras,
    rankedImg,
    userId,
    kills,
    placementMatches,
  } = req.body;
  const message = createOrderEmail(totalPrice, items, orderId, selectedLegend);
  try {
    const order = await Order.create({
      titles,
      prices,
      selectedLegend,
      selectedPopBadges,
      selectedExtraBadges,
      firstValue,
      secondValue,
      PSNemail,
      PSNPass,
      region,
      dateCreated,
      extrasArr,
      orderId,
      platform,
      badgesExtras,
      rankedImg,
      userId,
      kills,
      placementMatches,
    });
    sendEmailOrder({
      to: PSNemail,
      subject: "Order confirmation",
      text: message,
    });
    sendEmailOrder({
      to: "support@boostify.es",
      subject: "New order",
      text: `New order of ${titles} by ${PSNemail} Of ${prices}$ of the platform ${platform}`,
    });
    res.status(201).json({ sucess: true, order: order });
  } catch (error) {
    next(error);
    console.log(error, "failed to create order")
  }
};

exports.supportTickets = async (req, res, next) => {
  const { email, supportTicket } = req.body;
  try {
    const tickets = await supportTickets.create({
      email,
      supportTicket,
    });
    res.status(201).json({ sucess: true, ticket: tickets });
  } catch (error) {
    next(error);
  }
};
exports.reviews = async (req, res, next) => {
  const { name, review, rating, main, dateCreated } = req.body;
  try {
    const reviews = await Reviews.create({
      name,
      review,
      rating,
      main,
      dateCreated,
    });
    res.status(201).json({ sucess: true, review: reviews });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      error: error.message,
    });
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `https://boostify.es/passwordreset/${resetToken}`;

    const message = forgotPasswordEmail(resetUrl);

    try {
      await sendEmailForgot({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      sucess: true,
      data: "Password Reset Sucess",
    });
  } catch (err) {
    next(err);
  }
};

exports.missingOrder = async (req, res, next) => {
  const { orderId, userId } = req.body;
  try {
    const order = await Order.findOneAndUpdate(
      { orderId: orderId },
      { userId: userId },
      { new: true },
      (error, data) => {
        if (error) {
          res.status(500).json({ err: error });
        } else {
          res.status(200).json({ data: data });
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token });
};

exports.getReviews = async (req, res, next) => {
  try {
    await Reviews.find({},
      (error, reviews) => {
        if (error) {
          res.status(500).json({ err: error });
        } else {
          res.status(200).json({ reviews: reviews });
        }
      }
    );
  } catch (error) {
    next(error);
  }
}