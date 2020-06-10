import axios from "axios";

export default () => {
  return axios.create({
    baseURL:
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:5000"
        : "https://api-anudeepchpaul-in.herokuapp.com",
  });
};

export const parseData = (resp) => JSON.parse(JSON.stringify(resp.data));
