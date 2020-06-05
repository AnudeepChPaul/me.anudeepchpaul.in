import { combineReducers } from "redux";
import { appReducer, initialAppState } from "./App.reducer";
import { meReducer, initialMeState } from "./Me.reducer";

const rootReducer = combineReducers({
  application: appReducer,
  personal: meReducer,
});
export const rootState = { application: initialAppState, personal: initialMeState };
export default rootReducer;
