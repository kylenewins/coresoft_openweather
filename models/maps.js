const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  map: { type: JSON, required: true },
  date: { type: Date, default: Date.now }
});

const WeatherMap = mongoose.model("Weather", mapSchema);

module.exports = WeatherMap;
