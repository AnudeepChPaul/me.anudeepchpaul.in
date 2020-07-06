import axios from "axios";

export default () => {
  return axios.create({
    baseURL: process.env.ROOT_API_URL,
  });
};

export const parseData = (resp) => JSON.parse(JSON.stringify(resp.data));
