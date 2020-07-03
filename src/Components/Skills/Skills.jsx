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
import SkillsBar from "./SkillsBar";
import { SkillReduxState } from "@/Models/Skills";

const style = (theme) => ({
  skillCard: {
    backgroundColor: theme.palette.primary.main,
    flex: 1,
    height: "100%",
    padding: theme.spacing(40, 4),
  },
  header: {
    textAlign: "center",
    height: theme.spacing(32),
  },
  skillCardContent: {
    height: "100%",
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(90),
    },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(130),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(160),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(200),
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(230),
    },
    margin: "auto",
  },
  skillCardContentGrid: {},
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
    // this.props.childRef(this)

    setTimeout(() => {
      Helper.subscribeToSW((event) => {
        event.data.skills && this.props.fetchSkillsDataFromSW(event.data);
      });
    }, 2000);
  }

  render() {
    if (!this.state.visible) {
      return <div></div>;
    }
    return (
      <Paper className={this.props.classes.skillCard} elevation={0} square>
        <CardContent className={this.props.classes.skillCardContent}>
          <Grid
            container
            spacing={1}
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
                  <SkillsBar skill={skill} key={skill.skillId} />
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
