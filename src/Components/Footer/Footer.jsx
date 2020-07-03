import React from "react";
// import classes from "./Footer.module.scss";
import {
  faReact,
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Paper,
  TextField,
  withStyles,
  Typography,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => ({
  footerWrapper: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(30, 4, 10),
  },
  footerGrid: {
    width: theme.spacing(100),
    margin: "auto",

    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(60),
    },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(100),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(130),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(140),
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(170),
    },
  },
  footerGridHeader: {
    textAlign: "center",
    flex: "1 100%",
  },
  footerFormControlsWrapper: {
    padding: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  footerFields: {
    flex: "1 100%",
    margin: theme.spacing(4),
  },
});

class Footer extends React.Component {
  render() {
    return (
      <Paper className={clsx(this.props.classes.footerWrapper)}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={clsx(this.props.classes.footerGrid)}
        >
          <Grid item xs={12}>
            <Paper
              elevation={2}
              className={clsx(this.props.classes.footerFormControlsWrapper)}
            >
              <Typography
                variant="h4"
                color="textSecondary"
                gutterBottom
                className={clsx(this.props.classes.footerGridHeader)}
              >
                Email Me
              </Typography>
              <TextField
                name="Name"
                placeholder="Name"
                label="Name"
                color="secondary"
                className={clsx(this.props.classes.footerFields)}
              />
              <TextField
                name="Phone"
                placeholder="Phone Number"
                color="secondary"
                label="Phone Number"
                className={clsx(this.props.classes.footerFields)}
              />
              <TextField
                name="Email"
                placeholder="Email"
                color="secondary"
                label="Email"
                className={clsx(this.props.classes.footerFields)}
              />
              <TextField
                name="Message"
                placeholder="Message"
                label="Message"
                multiline={true}
                color="secondary"
                rows={8}
                className={clsx(this.props.classes.footerFields)}
              />
              <Button size="large" variant="contained" color='default'>
                Send
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.application,
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  loadAppPref: () => dispatch(fetchAppData()),
});
 */
export default connect(mapStateToProps, null)(withStyles(styles)(Footer));
