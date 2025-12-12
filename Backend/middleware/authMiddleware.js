const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer"))
    return res
      .status(400)
      .json({ success: false, message: "No token provided or invalid format" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "middleware error", error });
  }
};

module.exports = authMiddleware;
