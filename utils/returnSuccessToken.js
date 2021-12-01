
const jwt = require("jsonwebtoken");
exports.returnSuccessToken = () => {
    return jwt.sign({ sucess: true }, "hashSecret", {
        expiresIn: "20m",
      });
}
