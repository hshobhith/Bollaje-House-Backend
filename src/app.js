import express from "express";
import cors from "cors";
import billingRoutes from "./routes/billingRoutes.js";
import priceRoutes from "./routes/priceRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/billing", billingRoutes);
app.use("/api/price", priceRoutes);

export default app;