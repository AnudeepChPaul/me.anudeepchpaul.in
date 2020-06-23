import { skillsState } from "@/Redux/actions/Skills.action";

export const initialSkillsState = {
  skills: {
    list: [],
  }
};

export const skillsReducer = (state = initialSkillsState, { type, payload }) => {
  switch (type) {
    case skillsState.SKILLS_DATA_LOAD_STARTED:
      return Object.assign({}, state, {
        ...payload,
      });
    case skillsState.SKILLS_DATA_LOAD_FINISHED:
      return Object.assign({}, state, {
        ...payload,
      });
    default:
      return Object.assign({}, state);
  }
};
