import PriceSetting from "../models/PriceSetting.js";

// Get current price
const getPrice = async (req, res) => {
  try {
    let price = await PriceSetting.findOne();
    if (!price) {
      price = await PriceSetting.create({ pricePerKg: 10 });
    }
    res.json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update price
const updatePrice = async (req, res) => {
  try {
    const { pricePerKg } = req.body;

    let price = await PriceSetting.findOne();
    if (!price) {
      price = await PriceSetting.create({ pricePerKg });
    } else {
      price.pricePerKg = pricePerKg;
      await price.save();
    }

    res.json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getPrice, updatePrice };