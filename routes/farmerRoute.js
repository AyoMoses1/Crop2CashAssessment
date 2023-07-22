const express = require("express");
const {
  getAllFarmers,
  createFarmer,
} = require("../controllers/farmers_controller");

const router = express.Router();

router.route("/").get(getAllFarmers).post(createFarmer);

module.exports = router;
