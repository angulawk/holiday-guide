import axios from "axios";
import localforage from "localforage";

export const getCountryList = async () => {
  try {    
    const countries = await localforage.getItem("countries");

    if (countries) {
      return countries;
    }

    const response = await axios.get("http://api.countrylayer.com/v2/all?access_key=2b3ef594ec85c384d402f4d3252f379c");

    const data = response?.data;

    if (data) {
      await localforage.setItem("countries", data);
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};