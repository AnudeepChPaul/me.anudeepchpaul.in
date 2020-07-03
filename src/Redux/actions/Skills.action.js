import { getSkillSet } from "@/Api/Resume.api";

export const skillsState = {
  SKILLS_DATA_LOAD_STARTED: "SKILLS_DATA_LOAD_STARTED",
  SKILLS_DATA_LOAD_FINISHED: "SKILLS_DATA_LOAD_FINISHED",
};

const fetchSkillsData = async () => {
  const data = await getSkillSet();
  return { type: skillsState.SKILLS_DATA_LOAD_FINISHED, payload: sortData({...data}) };
};

const sortData = function (resp) {
  let newList = resp.skills.list.concat([]);

  newList = newList
    .sort((el1, el2) => Number(el1.order) - Number(el2.order))
    .concat([]);

  resp.skills.list = newList;

  return { ...resp };
};

export const fetchSkills = () => {
  return (dispatch) => {
    dispatch({
      type: skillsState.SKILLS_DATA_LOAD_STARTED,
    });
    return fetchSkillsData().then((data) => dispatch(data));
  };
};

export const fetchSkillsDataFromSW = (data) => {
  return (dispatch) => {
    return dispatch({
      type: skillsState.SKILLS_DATA_LOAD_FINISHED,
      payload: sortData({...data}),
    });
  };
};
