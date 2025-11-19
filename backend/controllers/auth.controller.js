import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are required" });
    }
    
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
