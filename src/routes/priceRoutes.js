import express from "express";
import { getPrice, updatePrice } from "../controllers/priceController.js";

const router = express.Router();

router.get("/", getPrice);
router.put("/", updatePrice);

export default router;
