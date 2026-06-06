const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    const {
      title,
      destination,
      startDate,
      endDate,
      budget,
      description,
    } = req.body;

    const trip = await Trip.create({
      user: req.user.userId,
      title,
      destination,
      startDate,
      endDate,
      budget,
      description,
    });

    res.status(201).json({
      success: true,
      trip,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getMyTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.user.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: trips.length,
      trips,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};