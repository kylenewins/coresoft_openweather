const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

// Matches with "/api/weather"
router.route("/")
  .get(weatherController.findAll)

// Matches with "/api/weather/"
router
  .route("/fiveday")
  .post(weatherController.saveFiveDay)

router
  .route("/extended")
  .post(weatherController.saveExtended)

router
  .route("/maps")
  .post(weatherController.saveMap)


module.exports = router;
