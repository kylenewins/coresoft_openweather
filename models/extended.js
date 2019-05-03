const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forecastSchema = new Schema({
  forecast: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const extendedForecast = mongoose.model("Extended", forecastSchema);

module.exports = extendedForecast;
