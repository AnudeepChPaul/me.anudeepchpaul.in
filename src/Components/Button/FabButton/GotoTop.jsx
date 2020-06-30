// import classes from "./GotoTop.module.scss";
import React from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FabButton = function (props) {
  const classes = {},
    classNames = [classes["fab-button-wrapper"], classes["fab-button-hidden"]];

  !props.hide && classNames.pop();

  return (
    <div className={classNames.join(" ")}>
      <button className={classes["fab-button-body"]} onClick={props.onClick}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
};

export default FabButton;
