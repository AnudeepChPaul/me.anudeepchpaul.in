import { connect } from "react-redux";
import React from "react";
import {
  fetchSkills,
  fetchSkillsDataFromSW,
} from "@/Redux/actions/Skills.action";
import Helper from "@/Helpers/Helper";
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

const SkillsBar = function (props) {
  const classes = makeStyles((theme) => ({
    progressBarWrapper: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      padding: theme.spacing(2),
    },
    progressBar: {
      backgroundColor: theme.palette.primary.customContrastColor,
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
          className={clsx(classes.progressBarLabel, "fade-in-fwd")}
        >
          {props.text}
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        className={clsx(classes.progressBarWrapper, "scale-in-hor-left")}
      >
        <div
          className={classes.progressBar}
          style={{
            width: `${props.value}%`,
          }}
        ></div>
      </Grid>
      <Grid item xs={2} className={clsx("fade-in-fwd")}>
        <Typography
          color="secondary"
          variant="body2"
          gutterBottom
        >{`${props.value}%`}</Typography>
      </Grid>
    </Grid>
  );
};

const style = (theme) => ({
  skillCard: {
    backgroundColor: theme.palette.primary.main,
    // cursor: "pointer",
    flex: 1,
    height: theme.spacing(theme.cardHeight),
  },
  header: {
    textAlign: "center",
  },
  skillCardContent: {
    height: "100%",
  },
  skillCardContentGrid: {
    height: "100%",
  },
  skillCardContentGridItem: {},
});

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      elevation: 4,
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
      <Paper className={this.props.classes.skillCard} elevation={1} square>
        <CardContent className={this.props.classes.skillCardContent}>
          <Grid
            container
            spacing={5}
            className={this.props.classes.skillCardContentGrid}
            justify="space-evenly"
          >
            <Grid item xs={12}>
              <Typography
                color="textSecondary"
                variant="h3"
                className={this.props.classes.header}
              >
                Professional Skills
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {this.props.skills &&
                this.props.skills.list.map((skill) => (
                  <SkillsBar {...skill} key={skill.skillId} />
                ))}
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Skills));
