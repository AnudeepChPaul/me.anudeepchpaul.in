import { getExperiences } from "@/Api/Resume.api";

export const experienceStates = {
  EXPERIENCE_DATA_LOAD_STARTED: "EXPERIENCE_DATA_LOAD_STARTED",
  EXPERIENCE_DATA_LOAD_FINISHED: "EXPERIENCE_DATA_LOAD_FINISHED",
};


const fetchExperienceData = async () => {
  const data = await getExperiences();
  return { type: experienceStates.EXPERIENCE_DATA_LOAD_FINISHED, payload: data };
};

export const fetchExperiences = () => {
  return (dispatch) => {
    dispatch({
      type: experienceStates.EXPERIENCE_DATA_LOAD_STARTED,
    });
    return fetchExperienceData().then((data) => dispatch(data));
  };
};

export const fetchExperienceDataFromSW = (data) => {
  return (dispatch) => {
    return dispatch({ type: experienceStates.EXPERIENCE_DATA_LOAD_FINISHED, payload: data });
  };
};
