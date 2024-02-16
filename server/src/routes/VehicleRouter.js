const express = require("express");
const router = express.Router();
const VehicleController = require("../controllers/VehicleController");
const { authMiddleWare } = require("../middleware/authMiddleware");
const Vehicle = require("../model/VehicleModel");

router.post("/create", VehicleController.createVehicle);
router.get("/get-details/:id", VehicleController.getDetailsVehicle);
router.get("/get-all", VehicleController.getAllVehicle);
router.delete("/delete/:id", authMiddleWare, VehicleController.deleteVehicle);
router.post("/delete-many", authMiddleWare, VehicleController.deleteMany);
router.get("/get/:id", VehicleController.getDetailsVehicle);

module.exports = router;
