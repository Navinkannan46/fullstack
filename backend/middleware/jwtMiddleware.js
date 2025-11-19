import jwt from "jsonwebtoken";

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No Token" });
  }

  try {
    const jwtToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = jwtToken.userId;
    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({ message: "Authorization failed" });
  }
};

export default jwtMiddleware;
