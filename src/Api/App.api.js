import Api, {parseData} from "@/Api";

export const initializeAppData = () => {
  return Api()
    .get("/app_service/initialize")
    .then(parseData);
};