import axios from "axios";

import baseUrl from "../config/urls";

export const axiosService = axios.create({
	baseURL: baseUrl
})