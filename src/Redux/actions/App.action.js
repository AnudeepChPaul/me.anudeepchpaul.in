import { initializeAppData } from "@/Api/App.api";
import unsplash, { toJson } from "@/Api/Unsplash.api";

export const appState = {
  APP_LOAD_PENDING: "APP_LOAD_PENDING",
  APP_LOAD_FINISHED: "APP_LOAD_FINISHED",
};

const getData = async () => {
  const data = await initializeAppData();
  const photos = await unsplash.search.photos("programming", 2);
  const images = await photos.json();
  return { type: appState.APP_LOAD_FINISHED, payload: { ...data, images } };
};

export const fetchAppData = () => {
  return (dispatch) => {
    return getData().then((data) => dispatch(data));
  };
};
