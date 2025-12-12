const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../utils/sendEmail");

const tokenGenerator = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ success: false, message: "All filled are required" });

    const isExist = await User.findOne({ email });
    if (isExist)
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    const token = tokenGenerator(user);

    const subject = "Welcome to Our App!";

    const html = `
    <h1>Hello ${name}</h1>
    <p>Welcome to our platform! Your account has been successfully created.</p>
      <p>Thank you for joining us!</p>
    `;
    await sendEmail(email, subject, html);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ((!email, !password))
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });

    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });

    const isMatch = bcrypt.compare(password, user.password);

    const token = tokenGenerator(user);

    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid Passoword" });
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Login error", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

module.exports = { register, login };
