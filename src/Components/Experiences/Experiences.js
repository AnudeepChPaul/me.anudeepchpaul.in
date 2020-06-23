import { connect } from "react-redux";
import React from "react";
import { fetchExperiences } from "@/Redux/actions/Experiences.action";
import classes from "@/Components/Experiences/Experiences.module.scss";

class Experiences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.fetchExperiences()
  }

  render() {
    if (!this.state.visible) {
      return <div className={classes.experience_component_container}></div>;
    }
    /* debugger */
    return (
      <div className={classes.experience_component_container}>
        <div className={classes.experience_component_body}>
          <div className={classes.experience_info_header}>
            <div>02 Experiences</div>
          </div>
          <div className={classes.experience_info}>
            {this.props.experiences &&
              this.props.experiences.list.map((exp) => (
                /* <ExperienceBar {...skill} key={skill.actionKey} /> */
                <div>{JSON.stringify(exp)}</div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.experiences,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchExperiences: () => dispatch(fetchExperiences()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);
