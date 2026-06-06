const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createTrip,
  getMyTrips,
} = require("../controllers/tripController");

const router = express.Router();

router.post("/", protect, createTrip);

router.get("/", protect, getMyTrips);

module.exports = router;