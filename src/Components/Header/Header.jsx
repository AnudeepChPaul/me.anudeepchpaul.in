import { connect, useSelector } from "react-redux";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import { fetchAppData } from "@/Redux/actions/App.action";
import { wrapper } from "@/Redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  CssBaseline,
  Grid,
  ButtonGroup,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { List } from "immutable";
import clsx from "clsx";
import TimerIcon from "@material-ui/icons/TimerSharp";
import InformationIcon from "@material-ui/icons/InfoSharp";
import SkillsIcon from "@material-ui/icons/WorkOutlineSharp";
import CloseIcon from "@material-ui/icons/CloseSharp";
import MoneyIcon from "@material-ui/icons/MonetizationOnSharp";
import PhoneIcon from "@material-ui/icons/PhoneCallbackRounded";
import Me from "../Me/Me";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const drawerWidth = 120;

const styles = (theme) => {
  console.log(theme)
  return {
    root: {
      flexGrow: 1,
    },
    fullWidth: {
      flex: 1,
    },
    drawerListItemInner: {
      color: theme.palette.secondary,
    },
    drawerOpen: {
      maxWidth: theme.spacing(drawerWidth),
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuToolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: theme.spacing(drawerWidth),
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
      padding: theme.spacing(0, 2),
      ...theme.mixins.toolbar,
    },
    drawerInnerItems: {
      padding: theme.spacing(4, 6),
      transition: theme.transitions.create(["width", "position"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    rootContainer: {
      flexGrow: 1,
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
      fontSize: '1rem'
    },
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  componentDidMount() {}

  onHeaderClick() {
    window.location.reload();
  }

  onButtonClick(evt) {
    this.props.scrollToRefs(evt);
  }

  handleDrawer() {
    this.setState({
      drawerOpen: this.state.drawerOpen,
    });
  }

  handleDrawerClose() {
    this.setState({
      drawerOpen: false,
    });
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
      list &&
      list.map((button, index) => (
        <ListItem
          button
          key={button.linkId}
          className={this.props.classes.drawerInnerItems}
        >
          <ListItemIcon color="secondary">
            {this.getIconForLinks(button)}
          </ListItemIcon>
          <ListItemText primary={button.text} />
        </ListItem>
      ))
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          className={this.props.classes.rootContainer}
        >
          <Grid item xs={4}>
            <Drawer
              variant="permanent"
              anchor="left"
              open={this.state.drawerOpen}
              className={clsx(this.props.classes.drawer, {
                [this.props.classes.drawerOpen]: this.state.drawerOpen,
              })}
              classes={{
                paper: clsx({
                  [this.props.classes.drawerOpen]: this.state.drawerOpen,
                }),
              }}
            >
              <Toolbar
                disableGutters={true}
                className={clsx(this.props.classes.menuToolbar)}
              >
                <Button edge="start" onClick={this.handleDrawer} dense="true">
                  <Typography
                    variant="h6"
                    className={this.props.classes.fullWidth}
                  >
                    ACP
                  </Typography>
                </Button>
              </Toolbar>
              {/* {this.props.header && this.getListOfLinks(this.props.header.list)} */}
              <Me></Me>
            </Drawer>
          </Grid>
          <Grid item xs={8} className={this.props.classes.content}>
            {this.props.children}
          </Grid>
          <Drawer
            variant="permanent"
            anchor="right"
            open={this.state.drawerOpen}
            className={clsx(this.props.classes.quickLinksDrawer)}
            classes={{
              paper: clsx({
                [this.props.classes.quickLinksDrawerPaper]: this.state
                  .drawerOpen,
              }),
            }}
          >
            {[faEnvelope, faLinkedinIn, faFacebookF, faTwitter].map(
              (icon, index) => (
                <IconButton
                  color="secondary"
                  key={index}
                  className={clsx(this.props.classes.quickLinksIconButton)}
                  size='small'
                >
                  <FontAwesomeIcon icon={icon} />
                </IconButton>
              )
            )}
            {/* {this.props.header && this.getListOfLinks(this.props.header.list)} */}
          </Drawer>
        </Grid>
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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
