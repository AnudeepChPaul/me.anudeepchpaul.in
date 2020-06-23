import Api, {parseData} from "@/Api";

export const getSkillSet = () => {
  return Api()
    .get("/resume_service/skills")
    .then(parseData);
};

export const getExperiences = () => {
  return Api()
    .get("/resume_service/experiences")
    .then(parseData);
};