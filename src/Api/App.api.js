import Api, {parseData} from "@/Api";

export const initializeAppData = () => {
  return Api()
    .get("/app/initialize")
    .then(parseData);
};

export const getSkillSet = () => {
  return Api()
    .get("/app/skills")
    .then(parseData);
};
