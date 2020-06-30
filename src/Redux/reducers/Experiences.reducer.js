import { experienceStates } from "@/Redux/actions/Experiences.action";

export const initialExperienceState = {
  experiences: {
    list: [],
  },
};

export const experienceReducer = (
  state = initialExperienceState,
  { type, payload }
) => {
  switch (type) {
    case experienceStates.EXPERIENCE_DATA_LOAD_STARTED:
      return Object.assign({}, state, {
        ...payload,
      });
    case experienceStates.EXPERIENCE_DATA_LOAD_FINISHED:
      return Object.assign({}, state, {
        ...payload,
      });
    default:
      return Object.assign({}, state);
  }
};
