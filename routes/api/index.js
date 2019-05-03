const router = require("express").Router();
const weatherRoutes = require("./api-routes");

// Book routes
router.use("/weather", weatherRoutes);

module.exports = router;