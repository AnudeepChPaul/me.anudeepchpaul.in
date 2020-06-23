import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchSkills } from "@/Redux/actions/Skills.action";
import SkillsBar from "./SkillsBar/SkillsBar";
import classes from "@/Components/Skills/Skills.module.scss";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.fetchSkills()/*.then(() => {
      this.setState({
        visible: true,
      });
    });*/
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
                <SkillsBar {...skill} key={skill.actionKey} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
