import { initializeAppData } from "@/Api/App.api";

export const appState = {
  APP_LOAD_PENDING: "APP_LOAD_PENDING",
  APP_LOAD_FINISHED: "APP_LOAD_FINISHED",
};

const getData = async () => {
  const data = await initializeAppData();
  return { type: appState.APP_LOAD_FINISHED, payload: data };
};

export const fetchAppData = () => {
  return (dispatch) => {
    // dispatch({
    //   type: appState.APP_LOAD_PENDING,
    //   payload: {
    //     title: "LOADING",
    //   },
    // });
    return getData().then((data) => dispatch(data));
  };
};
