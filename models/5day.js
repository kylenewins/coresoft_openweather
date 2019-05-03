const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forecastSchema = new Schema({
  forecast: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Forecast = mongoose.model("Weather", forecastSchema);

module.exports = Forecast;
