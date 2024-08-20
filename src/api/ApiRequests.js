import axios from "axios";
import { getToken } from "../utils/Utils";
import { toast } from "react-toastify";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
let token = getToken();

export const getCompanyList = async () => {
  return await axios
    .get(`${apiBaseUrl}/Company`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      res.data;
      toast.success("Company list fetched successfully");
    });
};
