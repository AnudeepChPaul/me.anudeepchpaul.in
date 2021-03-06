import React from "react";
// import classes from "./Footer.module.scss";
import { connect } from "react-redux";
import {
  Grid,
  Paper,
  TextField,
  withStyles,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
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
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.footerWrapper)}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={clsx(classes.footerGrid)}
      >
        <Grid item xs={12}>
          <Paper
            elevation={2}
            className={clsx(classes.footerFormControlsWrapper)}
          >
            <Typography
              variant="h4"
              color="textSecondary"
              gutterBottom
              className={clsx(classes.footerGridHeader)}
            >
              Email Me
            </Typography>
            <TextField
              name="Name"
              id="Name"
              placeholder="Name"
              label="Name"
              color="secondary"
              className={clsx(classes.footerFields)}
            />
            <TextField
              name="Phone"
              id="Phone"
              placeholder="Phone Number"
              color="secondary"
              label="Phone Number"
              className={clsx(classes.footerFields)}
            />
            <TextField
              name="Email"
              id="Email"
              placeholder="Email"
              color="secondary"
              label="Email"
              className={clsx(classes.footerFields)}
            />
            <TextField
              name="Message"
              id="Message"
              placeholder="Message"
              label="Message"
              multiline={true}
              color="secondary"
              rows={8}
              className={clsx(classes.footerFields)}
            />
            <Button size="large" variant="contained" color="default">
              Send
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default /* connect(mapStateToProps, null)( withStyles(styles)(*/ Footer;
