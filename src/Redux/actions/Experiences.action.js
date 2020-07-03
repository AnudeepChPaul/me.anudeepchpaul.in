import { getExperiences } from "@/Api/Resume.api";

export const experienceStates = {
  EXPERIENCE_DATA_LOAD_STARTED: "EXPERIENCE_DATA_LOAD_STARTED",
  EXPERIENCE_DATA_LOAD_FINISHED: "EXPERIENCE_DATA_LOAD_FINISHED",
};

const sortData = function (exp) {
  let newList = exp.experiences.list.concat([]);

  newList = newList
    .sort((el1, el2) => Number(el2.order) - Number(el1.order))
    .concat([]);

  exp.experiences.list = newList;

  return { ...exp };
};

const fetchExperienceData = async () => {
  const data = await getExperiences();
  return {
    type: experienceStates.EXPERIENCE_DATA_LOAD_FINISHED,
    payload: sortData({ ...data }),
  };
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
    return dispatch({
      type: experienceStates.EXPERIENCE_DATA_LOAD_FINISHED,
      payload: sortData({ ...data }),
    });
  };
};
