import { connect } from "react-redux";
import React from "react";
import {
  fetchExperiences,
  fetchExperienceDataFromSW,
} from "@/Redux/actions/Experiences.action";
import Helper from "@/Helpers/Helper";
import {
  withStyles,
  Paper,
  CardContent,
  Grid,
  Typography,
  Grow,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import theme from "@/Helpers/Themes";

const style = (theme) => ({
  experienceCard: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(40, 4),
  },
  workDuration: {
    color: theme.palette.error.main,
  },
  header: {
    textAlign: "center",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.fade,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  timelineItem: {
    height: theme.spacing(36),
  },
  timelineListWrapper: {
    marginTop: theme.spacing(11),
  },
});

class Experiences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.fetchExperiences();

    // setTimeout(() => {
    Helper.subscribeToSW((event) => {
      event.data.experiences &&
        this.props.fetchExperienceDataFromSW(event.data);
    });
    // }, 2000);
  }

  getExperienceBlocks() {
    if (!this.props.experiences) {
      return <div></div>;
    }

    const size = this.props.experiences.list.length - 1;

    return this.props.experiences.list.map((experience, order) => {
      const [from, , to] = experience.duration.split(" ");
      return (
        <TimelineItem key={order} className={this.props.classes.timelineItem}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {size !== order && <TimelineConnector />}
          </TimelineSeparator>
          {/* <Grow in={true} timeout={1000}> */}
          <TimelineContent>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              className={this.props.classes.workDuration}
            >
              {`${Helper.convertDate(from)} to ${Helper.convertDate(to)}`}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {experience.companyName}
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {experience.designation}
            </Typography>
          </TimelineContent>
          {/* </Grow> */}
        </TimelineItem>
      );
    });
  }

  render() {
    if (!this.state.visible) {
      return <div className={classes.experience_component_container}></div>;
    }
    /* debugger */
    return (
      <Paper
        className={this.props.classes.experienceCard}
        elevation={0}
        square
        onMouseMove={this.onMouseEnter}
        onMouseOut={this.onMouseOut}
      >
        <CardContent className={this.props.classes.experienceCardContent}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                color="textSecondary"
                variant="h3"
                className={this.props.classes.header}
                gutterBottom
              >
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Timeline
                align="alternate"
                className={this.props.classes.timelineListWrapper}
              >
                {this.getExperienceBlocks()}
              </Timeline>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
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
  fetchExperienceDataFromSW: (data) =>
    dispatch(fetchExperienceDataFromSW(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Experiences));
