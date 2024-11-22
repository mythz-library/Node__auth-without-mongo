const jwt = require("jsonwebtoken");
const log = require("../utils/logger");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log registration data
    log(`User registered with email: ${email}`);

    res.status(201).json({ message: "User registration logged successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simulate login verification
    if (password !== "testpassword") {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    // Log login data
    log(`User logged in with email: ${email}`);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
