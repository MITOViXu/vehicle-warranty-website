const Vehicle = require("../model/VehicleModel");

const createVehicle = (newVehicle) => {
  return new Promise(async (resolve, reject) => {
    const {
      name,
      identifynumber,
      image,
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
    } = newVehicle;
    try {
      const checkVehicle = await Vehicle.findOne({
        name: name,
      });
      if (checkVehicle !== null) {
        resolve({
          status: "ERR",
          message: "The name of product is already",
        });
      }
      const newVehicle = await Vehicle.create({
        name,
        identifynumber,
        image,
        dated: Date(dated),
        email,
        phone: Number(phone),
        address,
        description,
        // discount: Number(discount),
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
      });
      if (newVehicle) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: newVehicle,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsVehicle = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const car = await Vehicle.findOne({
        _id: id,
      });
      if (car === null) {
        resolve({
          status: "ERR",
          message: "The car is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCESS",
        data: car,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const deleteVehicle = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkVehicle = await Vehicle.findOne({
        _id: id,
      });
      if (checkVehicle === null) {
        resolve({
          status: "ERR",
          message: "The car is not defined",
        });
      }

      await Vehicle.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete car success",
      });
    } catch (e) {
      reject(e);
    }
  });
};
const deleteManyVehicle = (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Vehicle.deleteMany({ _id: ids });
      resolve({
        status: "OK",
        message: "Delete product success",
      });
    } catch (error) {
      reject(error);
    }
  });
};
const getAllVehicle = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("page: ", page);
      console.log("limit: ", limit);
      const totalVehicle = await Vehicle.countDocuments();
      console.log("total: ", totalVehicle);
      let allVehicle = [];
      if (filter) {
        console.log("Vo duoc filter");
        const label = filter[0];
        const allObjectFilter = await Vehicle.find({
          [label]: { $regex: filter[1] },
        })
          .limit(limit)
          .skip(page * limit)
          .sort({ createdAt: -1, updatedAt: -1 });
        resolve({
          status: "OK",
          message: "Success",
          data: allObjectFilter,
          total: totalVehicle,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalVehicle / limit),
        });
      }
      if (sort) {
        console.log("Vo duoc sort");
        const objectSort = {};
        objectSort[sort[1]] = sort[0];
        const allVehicleSort = await Vehicle.find()
          .limit(limit)
          .skip(page * limit)
          .sort(objectSort)
          .sort({ createdAt: -1, updatedAt: -1 });
        resolve({
          status: "OK",
          message: "Success",
          data: allVehicleSort,
          total: totalVehicle,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalVehicle / limit),
        });
      }
      if (!limit) {
        console.log("Vo duoc !limit");
        allVehicle = await Vehicle.find().sort({
          createdAt: -1,
          updatedAt: -1,
        });
      } else {
        console.log("Vo duoc else");
        allVehicle = await Vehicle.find()
          .limit(limit)
          .skip(page * limit)
          .sort({ createdAt: -1, updatedAt: -1 });
      }
      resolve({
        status: "OK",
        message: "Success",
        data: allVehicle,
        total: totalVehicle,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalVehicle / limit),
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllType = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allType = await Vehicle.distinct("type");
      resolve({
        status: "OK",
        message: "Success",
        data: allType,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const updateVehicle = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Vehicle.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: "ERR",
          message: "The product is not defined",
        });
      }

      const updatedProduct = await Vehicle.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createVehicle,
  getDetailsVehicle,
  deleteManyVehicle,
  deleteVehicle,
  updateVehicle,
  getAllType,
  getAllVehicle,
};
