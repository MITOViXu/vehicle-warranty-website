import axios from "axios";
import { axiosJWT } from "./UserService";

export const getAllVehicle = async (search, limit) => {
  let res = {};
  if (search?.length > 0) {
    res = await axios.get(
      `http://localhost:3001/api/vehicle/get-all?filter=name&filter=${search}&limit=${limit}`
    );
  } else {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-all?limit=${limit}`
    );
  }
  return res.data;
};

export const getVehicleType = async (type, page, limit) => {
  if (type) {
    const res = await axios.get(
      `http://localhost:3001/api/vehicle/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`
    );
    return res.data;
  }
};

export const createVehicle = async (data) => {
  const res = await axios.post(
    `http://localhost:3001/api/vehicle/product/create`,
    data
  );
  return res.data;
};

export const getDetailsVehicle = async (id) => {
  const res = await axios.get(
    `http://localhost:3001/api/vehicle/product/get-details/${id}`
  );
  return res.data;
};

export const updateVehicle = async (id, access_token, data) => {
  const res = await axiosJWT.put(
    `http://localhost:3001/api/vehicle/product/update/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteVehicle = async (id, access_token) => {
  const res = await axiosJWT.delete(
    `http://localhost:3001/api/vehicle/product/delete/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteManyVehicle = async (data, access_token) => {
  const res = await axiosJWT.post(
    `http://localhost:3001/api/vehicle/product/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllTypeVehicle = async () => {
  const res = await axios.get(
    `http://localhost:3001/api/vehicle/product/get-all-type`
  );
  return res.data;
};
