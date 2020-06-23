import { combineReducers } from "redux";
import { appReducer, initialAppState } from "./App.reducer";
import { skillsReducer, initialSkillsState } from "./Skills.reducer";
import {
  experienceReducer,
  initialExperienceState,
} from "./Experiences.reducer";

const rootReducer = combineReducers({
  application: appReducer,
  skills: skillsReducer,
  experiences: experienceReducer,
});
export const rootState = {
  application: initialAppState,
  skills: initialSkillsState,
  experiences: initialExperienceState
};
export default rootReducer;
