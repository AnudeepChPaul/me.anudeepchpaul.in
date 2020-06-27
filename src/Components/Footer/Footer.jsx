import React from "react";
import classes from "./Footer.module.scss";
import {
  faReact,
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className={classes.footer_wrapper}>
        <div className={classes.feedback_panel}></div>
        <footer className={classes.footer}>
          <div className={classes.footer_buttons}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className={classes.footer_buttons}>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className={classes.footer_buttons}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className={classes.footer_buttons}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          {/* <div className={classes.footer_buttons}>
            <FontAwesomeIcon icon={faGithub} />
          </div> */}
        </footer>
      </div>
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

export default /*connect(mapStateToProps, mapDispatchToProps)(*/ Footer; /*);*/
