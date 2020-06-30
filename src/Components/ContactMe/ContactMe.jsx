import React from "react";
import {
  faReact,
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faThermometerEmpty,
} from "@fortawesome/free-solid-svg-icons";
import {
  Grid,
  TextField,
  Paper,
  Card,
  CardContent,
  withStyles,
} from "@material-ui/core";
import theme from "@/Helpers/Themes";

const styles = (theme) => ({
  contactMePaper: {
    height: theme.spacing(theme.cardHeight),
  },
  contactMeCard: {
    // backgroundColor: theme.palette.primary.main,
    height: theme.spacing(theme.cardHeight),
    padding: theme.spacing(4),
  },
});

class Footer extends React.Component {
  render() {
    return (
      <Paper square elevation={1} className={this.props.classes.contactMePaper}>
        <Card className={this.props.classes.contactMeCard}>
          <Grid container spacing={2}>
            <CardContent>
              <Grid item xs={12}>
                <TextField label="Name" color="secondary" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" color="secondary" fullWidth />
              </Grid>
            </CardContent>
          </Grid>
        </Card>
      </Paper>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     ...state.application,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   loadAppPref: () => dispatch(fetchAppData()),
// });

export default /*connect(mapStateToProps, mapDispatchToProps)(*/ withStyles(
  styles
)(Footer); /*);*/
