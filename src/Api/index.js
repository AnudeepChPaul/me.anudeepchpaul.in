import axios from "axios";

export default () => {
  return axios.create({
    baseURL:
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:5000/resume/api"
        : "https://api-anudeepchpaul-in.herokuapp.com/resume/api",
  });
};

export const parseData = (resp) => JSON.parse(JSON.stringify(resp.data));
