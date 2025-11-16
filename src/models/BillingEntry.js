import mongoose from "mongoose";

const BillingEntrySchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  arecunent: { type: String, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.models.BillingEntry ||
  mongoose.model("BillingEntry", BillingEntrySchema);
