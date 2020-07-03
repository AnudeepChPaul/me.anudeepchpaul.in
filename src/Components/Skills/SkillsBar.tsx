import React from "react";
import {
  withStyles,
  Paper,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Card,
  Button,
  Link,
} from "@material-ui/core";
import clsx from "clsx";
import { SkillReduxState } from "@/Models/Skills";

const SkillsBar = function (props: {classes?: any, skill: SkillReduxState}) {
  const classes = makeStyles((theme) => ({
    progressBarWrapper: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      padding: theme.spacing(2),
    },
    progressBar: {
      backgroundColor: theme.palette.error.main,
      height: theme.spacing(1),
    },
    progressBarLabel: {
      textAlign: "right",
      textTransform: "uppercase",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }))();

  return (
    <Grid container spacing={8}>
      <Grid item xs={2}>
        <Typography
          color="secondary"
          variant="body2"
          gutterBottom
          className={clsx(classes.progressBarLabel)}
        >
          {props.skill.text}
        </Typography>
      </Grid>
      <Grid item xs={8} className={clsx(classes.progressBarWrapper)}>
        <div
          className={classes.progressBar}
          style={{
            width: `${props.skill.value}%`,
          }}
        ></div>
      </Grid>
      <Grid item xs={2} className={""}>
        <Typography
          color="secondary"
          variant="body2"
          gutterBottom
        >{`${props.skill.value}%`}</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillsBar;
