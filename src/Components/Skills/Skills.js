import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchSkills, fetchSkillsDataFromSW } from "@/Redux/actions/Skills.action";
import SkillsBar from "./SkillsBar/SkillsBar";
import classes from "@/Components/Skills/Skills.module.scss";
import Helper from "@/Helpers/Helper";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.fetchSkills();

    setTimeout(() => {
      Helper.subscribeToSW((event) => {
        event.data.skills && this.props.fetchSkillsDataFromSW(event.data);
      });
    }, 2000);
  }

  render() {
    if (!this.state.visible) {
      return <div className={classes.Skills_component_container}></div>;
    }
    return (
      <div className={classes.Skills_component_container}>
        <div className={classes.Skills_component_body}>
          <div className={classes.Skills_info_header}>
            <div>01 Professional Skills</div>
          </div>
          <div className={classes.Skills_info}>
            {this.props.skills &&
              this.props.skills.list.map((skill) => (
                <SkillsBar {...skill} key={skill.skillId} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.application,
    ...state.skills,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: () => dispatch(fetchSkills()),
  fetchSkillsDataFromSW: (data) => dispatch(fetchSkillsDataFromSW(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
