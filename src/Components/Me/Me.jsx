import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import {
  Typography,
  withStyles,
  CardContent,
  Grid,
  CardMedia,
  Paper,
  Fade,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => {
  const barHeight = 70;
  const imageHeight = 150 - barHeight;
  return {
    meCard: {
      // maxWidth: theme.spacing(150),
      backgroundColor: theme.palette.primary.main,
      height: theme.spacing(imageHeight + barHeight),
      margin: theme.spacing(16, 0, 0),
      ...theme.mixins.toolbar,
    },
    contrastText: {
      color: theme.palette.error.main,
    },
    meSubtitleLink: {
      cursor: "pointer",
      "&:hover": {
        border: 0,
        borderBottomColor: "inherit",
        borderStyle: "solid",
        borderBottomWidth: "1px",
      },
    },
    meCardMedia: {
      height: theme.spacing(imageHeight),
      width: theme.spacing(imageHeight - 1),
      borderRadius: 4,
      margin: "auto",
    },
    meCardContent: {
      height: theme.spacing(barHeight),
      padding: `${theme.spacing(4, 4, 1, 4)} !important`,
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
    },
    quickLinksBar: {
      margin: theme.spacing(4, 0, 0),
      backgroundColor: theme.palette.primary.main,
    },
    quickLinksBarLink: {
      display: "flex",
      justifyContent: "center",
      opacity: 0.6,
    },
    thinText: {
      fontWeight: 100,
    },
    quickLinksBarPaper: {
      backgroundColor: theme.palette.primary.main,
    },
    quickLinksBarLinkIcon: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  };
};

class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    if (!this.state.visible) {
      return <div className={this.props.classes.me_component_container}></div>;
    }

    return (
      <Paper className={this.props.classes.meCard} elevation={0} square>
        {/* <Fade in={true} timeout={2000}> */}
          <CardMedia
            className={this.props.classes.meCardMedia}
            image='/me_black.jpeg'
            title="Anudeep Chandra Paul"
          />
        {/* </Fade> */}
        {/* <Fade in={true} timeout={1000}> */}
          <CardContent className={this.props.classes.meCardContent}>
            <Grid container spacing={0} justify="center">
              <Grid item xs={12}>
                <Typography
                  color="textSecondary"
                  variant="h3"
                  className={this.props.classes.thinText}
                >
                  A<span className={this.props.classes.contrastText}></span>
                  NUDEEP
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="textSecondary"
                  variant="h3"
                  className={this.props.classes.thinText}
                >
                  C<span className={this.props.classes.contrastText}></span>
                  HANDRA
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="textSecondary"
                  variant="h3"
                  className={this.props.classes.thinText}
                >
                  PAUL
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className={this.props.classes.contrastText}
                  variant="body1"
                  gutterBottom
                >
                  <span
                    className={this.props.classes.meSubtitleLink}
                    onClick={this.props.scrollToSkills}
                  >
                    AI & ML Engineer
                  </span>{" "}
                  -{" "}
                  <span
                    className={this.props.classes.meSubtitleLink}
                    onClick={this.props.scrollToSkills}
                  >
                    Full Stack Web Developer
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="secondary"
                  variant="body1"
                  className={clsx()}
                >
                  Total{" "}
                  <span
                    className={this.props.classes.meSubtitleLink}
                    onClick={this.props.scrollToExp}
                  >
                    4.7+ Years Of Experiences
                  </span>
                </Typography>
                <Typography
                  color="secondary"
                  variant="body1"
                  className={clsx()}
                >
                  Currently lives in{" "}
                  <span
                    className={this.props.classes.meSubtitleLink}
                    onClick={this.props.scrollToExp}
                  >
                    Bangalore
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        {/* </Fade> */}
      </Paper>
    );
  }
}

export const getStaticProps = wrapper.getServerSideProps(async () => {
  return {
    props: {},
  };
});

export default withStyles(styles)(Me);
