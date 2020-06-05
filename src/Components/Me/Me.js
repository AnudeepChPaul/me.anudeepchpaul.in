import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import classes from "@/Components/Me/Me.module.scss";

class Me extends React.Component {
  render() {
    return (
      <div className={classes.me_component_container}>
        <div className={classes.me_component_body}>
          <div className={classes.me_component_name_placeholder}>
            <div className={classes.me_component_title}>
              <div className={classes.me_info_line}>
                <span>I</span>
                <span className={classes.me_info_contrast}>'</span>
                <span>m</span>
              </div>
              <div className={classes.me_info_line}>
                <span
                  className={classes.me_info_contrast}
                  style={{ marginLeft: "8.9px" }}
                >
                  A
                </span>
                <span>nudeep</span>
              </div>
              <div className={classes.me_info_line}>
                <span
                  className={classes.me_info_contrast}
                  style={{ marginLeft: "5.3px" }}
                >
                  C
                </span>
                <span>handra</span>
              </div>
              <div className={classes.me_info_line}>
                <span
                  className={classes.me_info_contrast}
                  style={{ marginLeft: "0.2px" }}
                >
                  P
                </span>
                <span>aul</span>
                <span className={classes.me_info_contrast}>.</span>
              </div>
            </div>
            <div className={classes.me_component_sub_title}>
              <div className={classes.me_info_line}>
                <span>- AI & ML Engineer</span>
              </div>
              <div className={classes.me_info_line}>
                <span>- Full Stack Web Developer</span>
              </div>
            </div>
          </div>
          <div className={classes.me_component_icon_wrapper}>
            <div className={classes.me_component_icon}></div>
          </div>
        </div>
      </div>
    );
  }
}

export const getStaticProps = wrapper.getServerSideProps(async (ctx) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Me);
