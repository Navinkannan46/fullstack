import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDb from "./config/db.js";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDb();

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`server running on localhost${PORT}`);
});
