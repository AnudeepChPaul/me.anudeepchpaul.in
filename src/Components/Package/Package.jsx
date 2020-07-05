import { connect } from "react-redux";
import React from "react";
import {
  fetchSkills,
  fetchSkillsDataFromSW,
} from "@/Redux/actions/Skills.action";
import {
  withStyles,
  Paper,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

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

class Package extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      elevation: 4,
    };
  }

  componentDidMount() {
    /* this.props.fetchSkills();
    // this.props.childRef(this)

    setTimeout(() => {
      Helper.subscribeToSW((event) => {
        event.data.skills && this.props.fetchSkillsDataFromSW(event.data);
      });
    }, 2000); */
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
                Pricings
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
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
)(withStyles(style)(Package));
