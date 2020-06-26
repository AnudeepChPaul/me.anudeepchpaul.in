import classes from "./GotoTop.module.scss";
import React from "react";

const FabButton = function (props) {
  const classNames = [
    classes["fab-button-wrapper"],
    classes["fab-button-hidden"],
  ];

  !props.hide && classNames.pop();

  return (
    <div className={classNames.join(" ")}>
      <button className={classes["fab-button-body"]} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default FabButton;
