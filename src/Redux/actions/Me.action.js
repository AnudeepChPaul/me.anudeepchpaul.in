import { getSkillSet } from "@/Api/App.api";

export const meState = {
  ME_DATA_LOAD_STARTED: "ME_DATA_LOAD_STARTED",
  ME_DATA_LOAD_FINISHED: "ME_DATA_LOAD_FINISHED",
};

const getData = async () => {
  const data = await getSkillSet();
  return { type: meState.ME_DATA_LOAD_FINISHED, payload: data };
};

export const fetchPersonalData = () => {
  return (dispatch) => {
    dispatch({
      type: meState.ME_DATA_LOAD_STARTED,
    });
    return getData().then((data) => dispatch(data));
  };
};
