import { connect } from "react-redux";
import React from "react";
import { fetchExperiences } from "@/Redux/actions/Experiences.action";
import classes from "@/Components/Experiences/Experiences.module.scss";
import ExperienceTimelineBlock from "./ExperienceTimelineBlock/ExperienceTimelineBlock";
import { getExperiences } from "@/Api/Resume.api";

class Experiences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.fetchExperiences();
  }

  getExperienceBlocks() {
    return (
      this.props.experiences &&
      this.props.experiences.list.map((experience) => {
        const classList = [];

        experience.left = experience.order % 2 == 0;

        classList.push(
          experience.left
            ? classes.experience_blocks_left
            : classes.experience_blocks_right
        );

        return (
          <div className={classes.experience_info} key={experience.order}>
            <div className={classes.experience_vertical_line}>
              {<div className={classes.experience_vertical_line_top_bar}></div>}
              <div className={classes.experience_vertical_line_line}></div>
            </div>
            <div className={classList.join(" ")}>
              <ExperienceTimelineBlock {...experience} />
            </div>
          </div>
        );
      })
    );
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
          <div className={classes.experience_info_wrapper}>
            {this.getExperienceBlocks()}
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
