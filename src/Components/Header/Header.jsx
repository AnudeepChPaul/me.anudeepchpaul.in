import { connect } from "react-redux";
import Head from "next/head";
import PropTypes from "prop-types";
import React, {  } from "react";
import { fetchAppData } from "@/Redux/actions/App.action";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  CssBaseline,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TimerIcon from "@material-ui/icons/TimerSharp";
import InformationIcon from "@material-ui/icons/InfoSharp";
import SkillsIcon from "@material-ui/icons/WorkOutlineSharp";
import MoneyIcon from "@material-ui/icons/MonetizationOnSharp";
import PhoneIcon from "@material-ui/icons/PhoneCallbackRounded";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  fullWidth: {
    flex: 1,
  },
  menuToolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 1),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(0, 2),
    // marginTop: theme.spacing(17),
    ...theme.mixins.toolbar,
  },
  quickLinksDrawer: {
    margin: 0,
    opacity: 0.7,
  },
  quickLinksDrawerPaper: {
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: theme.spacing(12),
    border: 0,
  },
  quickLinks: {
    backgroundColor: theme.palette.primary.main,
  },
  quickLinksIconButton: {
    margin: theme.spacing(2, 0),
    fontSize: "1rem",
  },
  linksWrapper: {},
  links: {
    marginRight: theme.spacing(5),
  },
});

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {}

  onHeaderClick() {
    window.location.reload();
  }

  onButtonClick(evt) {
    this.props.scrollToRefs(evt);
  }

  getIconForLinks(button) {
    switch (button.linkId) {
      case "about_me":
        return <InformationIcon color="secondary"></InformationIcon>;
      case "skills":
        return <SkillsIcon color="secondary"></SkillsIcon>;
      case "experience":
        return <TimerIcon color="secondary"></TimerIcon>;
      case "pay_scale":
        return <MoneyIcon color="secondary"></MoneyIcon>;
      case "contact":
        return <PhoneIcon color="secondary"></PhoneIcon>;
    }
  }

  getListOfLinks(list) {
    return (
      <div className={this.props.classes.linksWrapper}>
        {list &&
          list.map((button, index) => (
            <Button
              key={index}
              color="secondary"
              size="small"
              className={this.props.classes.links}
              onClick={this.onButtonClick}
              aria-label={button.linkId}
            >
              {button.text}
            </Button>
          ))}
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Head>
          <title>{this.props.title.title}</title>
        </Head>
        <CssBaseline />
        <AppBar position="fixed" className={clsx({})} elevation={1}>
          <Toolbar
            disableGutters={true}
            className={clsx(this.props.classes.menuToolbar)}
          >
            <Button component="div">
              <Typography variant="h6" color='textSecondary'>ACP</Typography>
            </Button>
            {this.props.header && this.getListOfLinks(this.props.header.list)}
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.content}>{this.props.children}</div>
        <Drawer
          variant="permanent"
          anchor="right"
          open={this.state.drawerOpen}
          className={clsx(this.props.classes.quickLinksDrawer)}
          classes={{
            paper: clsx({
              [this.props.classes.quickLinksDrawerPaper]: this.state.drawerOpen,
            }),
          }}
        >
          {[faEnvelope, faLinkedinIn, faFacebookF, faTwitter].map(
            (icon, index) => (
              <IconButton
                color="secondary"
                key={index}
                className={clsx(this.props.classes.quickLinksIconButton)}
                aria-label='Connect virtually'
                size="small"
              >
                <FontAwesomeIcon icon={icon} />
              </IconButton>
            )
          )}
        </Drawer>
      </div>
    );
  }
}

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
)(withStyles(styles)(Header));
