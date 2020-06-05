import { connect, useSelector } from "react-redux";
import React from "react";
import { fetchAppData } from "@/Redux/actions/App.action";
import classes from "./Footer.module.scss";
import { wrapper } from "@/Redux";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className={classes.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={classes.logo} />
          </a>
        </footer>
      </>
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
