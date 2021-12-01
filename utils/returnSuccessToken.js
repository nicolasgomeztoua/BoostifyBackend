exports.returnSuccessToken = () => {
    return jwt.sign({ sucess: true }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
}
