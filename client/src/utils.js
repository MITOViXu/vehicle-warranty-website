export const isJsonString = (data) => {
  try {
    // console.log("Parse: ", error);

    JSON.parse(data);
  } catch (error) {
    console.log("Error: ", error);
    console.log("Invalid JSON data: ", data);
    return false;
  }
  return true;
};
