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
  Theme,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const style = (theme) => {
  return {
    professionalProjects: {
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
    gridList: {
      backgroundColor: theme.palette.primary.main,
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
      margin: `${theme.spacing(0, 0, 10, 0)} !important`,
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    paperTiles: {
      height: "auto",
      padding: theme.spacing(4),
      flex: 0.8,
      margin: "auto",
      backgroundColor: "transparent",
    },
    technologyLink: {
      cursor: "pointer",
      "&:hover": {
        border: 0,
        borderBottomColor: "inherit",
        borderStyle: "solid",
        borderBottomWidth: "1px",
      },
    },
    projectPanel: {},
    paperTilesHeader: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      borderRadius: 4,
      margin: theme.spacing(0, 0, 4, 0),
    },
    paperTilesSummaryHeader: {
      padding: theme.spacing(0, 4),
      fontWeight: 500,
    },
    paperTilesSummary: {
      padding: theme.spacing(4),
      overflow: "hidden",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
  };
};

const projectTiles = (project, classes) => (
  <AccordionDetails key={project.order}>
    <Paper className={classes.paperTiles} elevation={1}>
      <Typography
        variant="h6"
        align="center"
        className={classes.paperTilesHeader}
      >
        <span>{project.name}</span>
      </Typography>
      <Typography
        variant="body2"
        className={classes.paperTilesSummaryHeader}
        color="secondary"
      >
        {" "}
        Technologies Used:{" "}
      </Typography>
      <Typography variant="body1" className={classes.paperTilesSummary}>
        {project.techno_stack.map((el) => {
          return (
            <span key={el.order}>
              <span className={classes.technologyLink}>{`${el.name}`}</span>
              {", "}
            </span>
          );
        })}
      </Typography>
      <Typography variant="h6" className={classes.paperTilesSummary}>
        {project.accomplishments.map((el) => {
          return (
            <Typography
              variant="body2"
              className={classes.paperTilesSummary}
              key={el.order}
            >
              <span>{`${el.order}. ${el.text}`}</span>
              {", "}
            </Typography>
          );
        })}
      </Typography>
    </Paper>
  </AccordionDetails>
);

class ProfessionalProjects extends React.Component {
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

  getProfessionalProjects() {
    if (!this.props.experiences) {
      return <div></div>;
    }

    const classes = this.props.classes,
      company = this.props.experiences.list;

    return company.map((company, companyIndex) => {
      return (
        <Accordion
          key={companyIndex}
          className={classes.gridList}
          elevation={0}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.projectPanel}
          >
            <Typography className={classes.heading}>
              {company.companyName}
            </Typography>
          </AccordionSummary>
          {company.projects?.map((project) => projectTiles(project, classes))}
        </Accordion>
      );
    });
  }

  render() {
    if (!this.state.visible) {
      return <div className={classes.experience_component_container}></div>;
    }
    return (
      <Paper
        className={this.props.classes.professionalProjects}
        elevation={0}
        square
      >
        <CardContent className={this.props.classes.professionalProjectsContent}>
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
            <Grid item xs={12} className={this.props.classes.root}>
              {this.getProfessionalProjects()}
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
)(withStyles(style)(ProfessionalProjects));
