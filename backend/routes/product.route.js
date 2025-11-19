import express from "express";
import {
  getAllProducts,
  getOneProduct,
} from "../controllers/product.controller.js";
import jwtMiddleware from "../middleware/jwtMiddleware.js";

const route = express.Router();

route.get("/", jwtMiddleware, getAllProducts);
route.get("/:id", jwtMiddleware, getOneProduct);

export default route;
