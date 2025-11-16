import express from "express";
import BillingEntry from "../models/BillingEntry.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const entries = await BillingEntry.find().sort({ date: -1 });
  res.json(entries);
});

router.post("/", async (req, res) => {
  const entry = await BillingEntry.create(req.body);
  res.json(entry);
});

router.put("/:id", async (req, res) => {
  const updated = await BillingEntry.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await BillingEntry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
