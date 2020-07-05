import { appState } from "@/Redux/actions/App.action";

export const initialAppState = {
  title: 'null',
  header: {
    list: [],
  }
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      const appData = payload.application,
        stateHeaderList = state.header.list.concat();

        appData.header.list = stateHeaderList.concat(appData.header.list);

      return Object.assign({}, state, {
        ...appData
      });
    case appState.APP_LOAD_PENDING:
      return Object.assign({}, state, {
        ...payload,
      });
    case appState.APP_LOAD_FINISHED:
      return Object.assign({}, state, {
        ...payload,
      });
    default:
      return Object.assign({}, state);
  }
};
