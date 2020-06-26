import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import classes from "./ExperienceTimelineBlock.module.scss";
import { convertDate } from "@/Helpers/Helper";

const ExperienceTimeline = function (props) {
  const classNames = [classes.experiences_timeline_block_wrapper];

  props.left && classNames.push(classes.experience_timeline_reversed);

  const [from, divider, to] = props.duration.split(" ");

  return (
    <div className={classNames.join(" ")}>
      <h4 className={classes.experiences_timeline_header}>{
      `${convertDate(from)} to ${convertDate(to)}`}</h4>
      <h5 className={classes.experiences_timeline_sub_header}>
        {props.companyName}
      </h5>
      <div className={classes.experiences_timeline_designation}>
        {props.designation}
      </div>
      <div>{props.summary}</div>
    </div>
  );
};

export default ExperienceTimeline;
