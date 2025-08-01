import axios from "axios";
import { getApiDomain } from "../config";

const axiosInstance = axios.create({
    baseURL: `${getApiDomain}/api/v1`
});

export {axiosInstance};