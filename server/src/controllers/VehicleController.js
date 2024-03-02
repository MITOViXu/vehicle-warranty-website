const VehicleService = require("../services/VehicleService");

const createVehicle = async (req, res) => {
  try {
    const {
      name,
      identifynumber,
      dated,
      email,
      phone,
      address,
      plates,
      bill,
      tax,
      seri,
      license,
      engine,
      frame,
      type,
      brand,
      description,
    } = req.body;
    if (
      !name ||
      !identifynumber ||
      !dated ||
      !email ||
      !phone ||
      !address ||
      !plates ||
      !bill ||
      !tax ||
      !seri ||
      !license ||
      !type ||
      !engine ||
      !frame ||
      !brand
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await VehicleService.createVehicle(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const deleteVehicle = async (req, res) => {
  try {
    const vehicleId = req.params.id;
    if (!vehicleId) {
      return res.status(200).json({
        status: "ERR",
        message: "The vehicleId is required",
      });
    }
    const response = await VehicleService.deleteVehicle(vehicleId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsVehicle = async (req, res) => {
  try {
    const carId = req.params.id;
    if (!carId) {
      return res.status(200).json({
        status: "ERR",
        message: "The carId is required",
      });
    }
    const response = await VehicleService.getDetailsVehicle(carId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const deleteMany = async (req, res) => {
  try {
    const ids = req.body.ids;
    if (!ids) {
      return res.status(200).json({
        status: "ERR",
        message: "The ids is required",
      });
    }
    const response = await VehicleService.deleteManyVehicle(ids);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getAllVehicle = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const response = await VehicleService.getAllVehicle(
      Number(limit) || null,
      Number(page) || 0,
      sort,
      filter
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getAllType = async (req, res) => {
  try {
      const response = await VehicleService.getAllType()
      return res.status(200).json(response)
  } catch (e) {
      return res.status(404).json({
          message: e
      })
  }
}

module.exports = {
  createVehicle,
  getDetailsVehicle,
  deleteVehicle,
  deleteMany,
  getAllType,
  getAllVehicle,
};
