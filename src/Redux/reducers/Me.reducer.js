import { meState } from "@/Redux/actions/Me.action";

export const initialMeState = {
  skills: {
    list: [],
  }
};

export const meReducer = (state = initialMeState, { type, payload }) => {
  switch (type) {
    case meState.ME_DATA_LOAD_STARTED:
      return Object.assign({}, state, {
        ...payload,
      });
    case meState.ME_DATA_LOAD_FINISHED:
      return Object.assign({}, state, {
        ...payload,
      });
    default:
      return Object.assign({}, state);
  }
};
