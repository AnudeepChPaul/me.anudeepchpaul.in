export interface SkillsReduxState {
  list: SkillReduxState[];
}

export interface SkillReduxState {
  _id: string;
  text: string;
  value: string;
  skillId: string;
  order: string;
}
