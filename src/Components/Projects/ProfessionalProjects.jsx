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
    // maxWidth: theme.spacing(170),
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(theme.cardHeight),
  },
  workDuration: {
    color: theme.palette.primary.customContrastColor,
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
    setTimeout(() => {
      Helper.subscribeToSW((event) => {
        event.data.experiences &&
          this.props.fetchExperienceDataFromSW(event.data);
      });
    }, 2000);
  }

  // getProfessionalProjects() {
  //   if (
  //     !this.props.experiences ||
  //     !this.props.experiences.list[1] ||
  //     !this.props.experiences.list[1].projects
  //   ) {
  //     return <div></div>;
  //   }

  //   const size = this.props.experiences.list.length - 1;

  //   return this.props.experiences.list[1].projects.map((project, order) => {
  //     return (
  //       <TimelineItem key={order} className={this.props.classes.timelineItem}>
  //         <TimelineSeparator>
  //           <TimelineDot variant="outlined" />
  //           {size !== order && <TimelineConnector />}
  //         </TimelineSeparator>
  //         <Grow in={true} timeout={2000}>
  //           <TimelineContent>
  //             <Typography color="textSecondary" variant="body1">
  //               {project.name}
  //             </Typography>
  //             <Typography color="textSecondary" variant="caption">
  //               {project.techno_stack.map((el) => el.name).join(", ")}
  //             </Typography>
  //           </TimelineContent>
  //         </Grow>
  //       </TimelineItem>
  //     );
  //   });
  // }

  render() {
    if (!this.state.visible) {
      return <div className={classes.experience_component_container}></div>;
    }
    /* debugger */
    return (
      <Paper className={this.props.classes.experienceCard} elevation={1} square>
        <CardContent className={this.props.classes.experienceCardContent}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                color="textSecondary"
                variant="h3"
                className={this.props.classes.header}
                gutterBottom
              >
                Work Projects
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Timeline
                align="left"
                className={this.props.classes.timelineListWrapper}
              >
                {this.getProfessionalProjects()}
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
