import { initializeAppData } from "@/Api/App.api";
import unsplash, { toJson } from "@/Api/Unsplash.api";

export const appState = {
  APP_LOAD_PENDING: "APP_LOAD_PENDING",
  APP_LOAD_FINISHED: "APP_LOAD_FINISHED",
};

const sortData = function (appData) {
  let newList = appData.header.list.concat([]);

  newList = newList
    .sort((el1, el2) => Number(el1.order) - Number(el2.order))
    .concat([]);

  appData.header.list = newList;

  return { ...appData };
};

const getData = async () => {
  const data = sortData(await initializeAppData());
  const photos = await unsplash.search.photos("programming", 2);
  const images = await photos.json();
  return { type: appState.APP_LOAD_FINISHED, payload: { ...data, images } };
};

export const fetchAppData = () => {
  return (dispatch) => {
    return getData().then((data) => dispatch({...data}));
  };
};
