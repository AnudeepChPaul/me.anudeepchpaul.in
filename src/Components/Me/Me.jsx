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
  Zoom,
  IconButton,
  Icon,
  Fade,
} from "@material-ui/core";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faInbox,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/Helpers/Themes";

const styles = (theme) => {
  const barHeight = 70;
  const imageHeight = theme.cardHeight - barHeight;

  return {
    meCard: {
      // maxWidth: theme.spacing(150),
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      height: theme.spacing(theme.cardHeight),
    },
    contrastText: {
      color: theme.palette.primary.customContrastColor,
    },
    meSubtitleLink: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    meCardMedia: {
      height: theme.spacing(imageHeight),
      width: theme.spacing(imageHeight - 1),
      // height: theme.spacing(theme.cardHeight / 2),
      // backgroundPosition: 'left'
      borderRadius: 4,
      margin: "auto",
    },
    meCardContent: {
      height: theme.spacing(barHeight),
      // position: "sticky",
      // top: theme.spacing(theme.cardHeight),
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
      return <div className={classes.me_component_container}></div>;
    }

    return (
      <Paper className={this.props.classes.meCard} elevation={1} square>
        <Fade in={true} timeout={2000}>
          <CardMedia
            className={this.props.classes.meCardMedia}
            image="/me_black.jpeg"
            title="Anudeep Chandra Paul"
          />
        </Fade>
        <Fade in={true} timeout={1000}>
          <CardContent className={this.props.classes.meCardContent}>
            <Grid container spacing={0} justify="center">
              <Grid item xs={12}>
                <Typography
                  color="textSecondary"
                  variant="h3"
                  className={this.props.classes.thinText}
                >
                  A<span classes={this.props.classes.contrastText}></span>
                  NUDEEP
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="textSecondary"
                  variant="h3"
                  className={this.props.classes.thinText}
                >
                  C<span classes={this.props.classes.contrastText}></span>
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
                  dense="true"
                  variant="subtitle1"
                >
                  <span className={this.props.classes.meSubtitleLink}>
                    AI & ML Engineer
                  </span>{" "}
                  -{" "}
                  <span className={this.props.classes.meSubtitleLink}>
                    Full Stack Web Developer
                  </span>
                </Typography>
                {/* <Typography
                    className={this.props.classes.contrastText}
                    dense="true"
                    variant="subtitle1"
                  >
                    <span>- Full Stack Web Developer</span>
                  </Typography> */}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="secondary"
                  variant="h4"
                  className={clsx(this.props.classes.thinText)}
                >
                  Total 4.7+
                </Typography>
              </Grid>
              {/* <Grid item xs={12} className={this.props.classes.quickLinksBar}>
                <Paper
                  elevation={0}
                  className={this.props.classes.quickLinksBarPaper}
                >
                  <Grid container spacing={2} justify={"center"}>
                    {[faEnvelope, faLinkedinIn, faFacebookF, faTwitter].map(
                      (icon, index) => (
                        <Grid
                          item
                          xs={2}
                          key={index}
                          className={this.props.classes.quickLinksBarLink}
                        >
                          <IconButton
                            className={this.props.classes.quickLinksBarLinkIcon}
                            color="secondary"
                          >
                            <FontAwesomeIcon icon={icon} />
                          </IconButton>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Paper>
              </Grid> */}
            </Grid>
          </CardContent>
        </Fade>
        {/* </CardMedia> */}
      </Paper>
    );
  }
}

export const getStaticProps = wrapper.getServerSideProps(async () => {
  return {
    props: {},
  };
});

const mapStateToProps = (state) => {
  return {
    ...state.application,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadAppPref: () => dispatch(fetchAppData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Me));
