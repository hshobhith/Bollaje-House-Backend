import e from "express";
import mongoose from "mongoose";

const priceSettingSchema = new mongoose.Schema({
  pricePerKg: {
    type: Number,
    required: true,
    default: 10,
  },
});

export default mongoose.models.PriceSetting ||
  mongoose.model("PriceSetting", priceSettingSchema);