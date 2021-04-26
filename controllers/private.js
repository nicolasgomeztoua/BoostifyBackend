const jwt = require("jsonwebtoken");
const User = require("../models/User");


exports.getPrivateData = (req, res, next) => {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
  res.status(200).json({
    sucess: true,
    data: "You got acess to the private data in this route",
    username: user.username,
  });
};
