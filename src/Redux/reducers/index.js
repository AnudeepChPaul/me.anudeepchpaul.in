import { combineReducers } from "redux";
import { appReducer, initialAppState } from "./App.reducer";

const rootReducer = combineReducers({
  application: appReducer,
});
export const rootState = { application: initialAppState };
export default rootReducer;
