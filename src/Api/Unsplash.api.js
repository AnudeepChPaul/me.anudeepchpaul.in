import axios from "axios";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  params: {
    utm_source: "resume.anudeepchpaul.in",
    utm_medium: "referral",
  }
});

export default unsplash;
