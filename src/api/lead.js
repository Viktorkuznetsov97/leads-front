import axios from "../utils/axios";

export const getCountLeadsAPI = async () => axios.get("/lead/count/");
